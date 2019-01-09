import layout from './ls-layout';
import path from './ls-path';
import * as d3 from 'd3-scale';

const lsLookup = layout.reduce((lookup,current)=>{
  lookup[current.code] = current;
  return lookup;
}, {})

const londonSquared = () => {
  const config = {
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
      masked:'masked',
      foreground:'foreground',
    },
    gridGapProportion: 0.05,
    parent: null,
  }

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

    const className = (n)=>`${config.classPrefix}-${config.classDict[n]}`;
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
        .attr('class', className('background'))
        .attr('transform', d=>`scale(${config.scaleFactor})`)
        .attr('d', d=>path[d.code]);      

    parent.selectAll('clipPath').filter(d=>!d.irregular)
      .append('rect')
        .attr('width', config.blockSize)
        .attr('height', config.blockSize);

    parent.selectAll(`.${className('borough')}`)
      .data(layoutData)
        .enter()
      .append('g')
        .attr('transform', d=>`translate(${config.gridScale(d.x)}, ${config.gridScale(d.y)})`)
        .attr('class', className('borough'), true)
        .call((borough) => {
          //background
          borough.filter(d => !d.irregular)
            .append('rect')
            .attr('class', className('background'))
            .attr('x', config.gridGap/2)
            .attr('y', config.gridGap/2)
            .attr('width', config.blockSize)
            .attr('height', config.blockSize);

          borough.filter(d => d.irregular)
            .append('path')
            .attr('class', className('background'))
            .attr('transform', `translate(${config.gridGap/2}, ${config.gridGap/2}) scale(${config.scaleFactor})`)
            .attr('d', d=>path[d.code]);

          //masked-attachment point
          borough.append('g')
            .attr('transform',`translate(${config.gridGap/2},${config.gridGap/2})`)
            .attr('class', className('masked'))
            .attr('clip-path', d=>`url(#${config.classPrefix}-mask-${d.code})`);

          //foreground attachment point
          borough.append('g')
            .attr('transform',`translate(${config.gridGap/2},${config.gridGap/2})`)
            .attr('class',className('foreground'));
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
    return config.data;
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
    return config.parent.selectAll('.ls-masked');
  };

  ls.foreground = function() {
    return config.parent.selectAll('.ls-foreground');
  };

  ls.blockSize = () => config.blockSize;

  return ls;
}

export { londonSquared as londonSquared };