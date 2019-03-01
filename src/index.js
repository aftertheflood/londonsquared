import layout from './ls-layout';
import path from './ls-path';
import * as d3 from 'd3-scale';

const lsLookup = layout.reduce((lookup,current)=>{
  lookup[current.code] = current;
  return lookup;
}, {})

const londonSquared = (userConfig) => {
  const config = Object.assign({
    width: 800,
    height: 700,
    blockSize: 100,
    data: undefined,
    dataLookup: undefined,
    dataColumns: undefined,
    accessor: d => d.code,
    classPrefix: 'ls',
    classDict: {
      borough:'borough',
      background:'background',
      interaction:'interaction',
      masked:'masked',
      foreground:'foreground',
    },
    gridGapProportion: 1/13,
    parent: null,
  }, userConfig);

  config.className = (n) => `${config.classPrefix}-${config.classDict[n]}`;

  function rescale(){ // this function is pretty much 100% side effect
    let availableSize = config.width; 
    let availableBlocks = 8; 
    if((config.width/config.height) >= (8/7)){
      availableSize = config.height;
      availableBlocks = 7;
    }
    config.gridScale = d3.scaleLinear()
      .range([0, availableSize])
      .domain([0, availableBlocks]);

    config.blockSize = config.gridScale(1 * (1-config.gridGapProportion));
    config.gridGap = config.gridScale(config.gridGapProportion);
    config.scaleFactor = config.blockSize/100;
  }

  const ls = (parent) => {
    rescale();

    const layoutData = layout.map( d=> config.dataLookup[d.code] );

    parent.selectAll('defs').data([true])
      .enter()
        .append('defs')
      .selectAll('clipPath')
      .data(layoutData)
        .enter()
      .append('clipPath')
        .attr('id', d=>`${config.classPrefix}-mask-${d.code}`)
        .attr('fill','#000');
    
    parent.selectAll('clipPath').filter(d=>d.irregular)
      .append('path')
        .attr('class', config.className('background'))
        .attr('transform', d=>`scale(${config.scaleFactor})`)
        .attr('d', d=>path[d.code]);      

    parent.selectAll('clipPath').filter(d=>!d.irregular)
      .append('rect')
        .attr('width', config.blockSize)
        .attr('height', config.blockSize);

    parent.selectAll(`.${config.className('borough')}`)
      .data(layoutData)
        .enter()
      .append('g')
        .attr('transform', d=>`translate(${config.gridScale(d.x)}, ${config.gridScale(d.y)})`)
        .attr('class', config.className('borough'), true)
        .call((borough) => {
          //background
          borough.append('rect')
            .attr('class', config.className('interaction'))
            .attr('fill-opacity', 0)
            .attr('x', config.gridGap/2)
            .attr('y', config.gridGap/2)
            .attr('width', config.blockSize)
            .attr('height', config.blockSize);

          borough.filter(d => !d.irregular)
            .append('rect')
            .attr('class', config.className('background'))
            .attr('x', config.gridGap/2)
            .attr('y', config.gridGap/2)
            .attr('width', config.blockSize)
            .attr('height', config.blockSize);

          borough.filter(d => d.irregular)
            .append('path')
            .attr('class', config.className('background'))
            .attr('transform', `translate(${config.gridGap/2}, ${config.gridGap/2}) scale(${config.scaleFactor})`)
            .attr('d', d=>path[d.code]);

          //masked-attachment point
          borough.append('g')
            .attr('transform',`translate(${config.gridGap/2},${config.gridGap/2})`)
            .attr('class', config.className('masked'))
            .attr('clip-path', d=>`url(#${config.classPrefix}-mask-${d.code})`);

          //foreground attachment point
          borough.append('g')
            .attr('transform',`translate(${config.gridGap/2},${config.gridGap/2})`)
            .attr('class', config.className('foreground'));
        });
    config.parent = parent;
    return parent;
  };

  ls.data = function(data, accessor) {
    if(data!=undefined){
      config.data = data;
      config.dataColumns = config.data.columns;
      config.accessor = accessor ? accessor : config.accessor;
      config.dataLookup = config.data.reduce((lookup, current) => {
        const currentCode = config.accessor(current);
        const lsData = lsLookup[currentCode];
        lookup[currentCode] = Object.assign({
          data: current
        }, lsData);
        return lookup;
      }, {})
      return this;
    }
    return config.parent.selectAll(`.${config.className('borough')}`).data()
  };

  ls.width = function(width) {
    config.width = width;
    rescale();
    return this;
  };

  ls.height = function(height) {
    config.height = height;
    rescale();
    return this;
  };

  ls.centroid = function() {
    return [config.blockSize/2, config.blockSize/2];
  };

  ls.blockSize = function() {
    return config.blockSize;
  };

  ls.masked = function() {
    return config.parent
      .selectAll(`.${config.className('masked')}`);
  };

  ls.foreground = function() {
    return config.parent
      .selectAll(`.${config.className('foreground')}`);
  };

  ls.background = function() {
    return config.parent
      .selectAll(`.${config.className('background')}`);
  };

  ls.interaction = function() {
    return config.parent
      .selectAll(`.${config.className('interaction')}`);
  };

  ls.gridGapProportion = function(x) {
    if(!x) return config.gridGapProportion;
    config.gridGap = x;
    rescale();
    return this();
  }

  ls.blockSize = () => config.blockSize;

  return ls;
}

londonSquared.version = '0.1.1';

export { londonSquared as londonSquared };