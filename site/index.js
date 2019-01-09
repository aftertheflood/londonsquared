import londonSquared from '../src';
import * as d3 from 'd3';

window.onload = ()=>{
  const width = 600;
  const height = 525;

  const svg = d3.select('.vizualisation-container')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  d3.csv('/data/london-borough-profiles.csv')
    .then((data)=>{
      const LS = londonSquared()
        .data(data, d=>d.Code) //the second argument is an accessor for the local authority code associated with the data row. by default this is d=>d.code
        .width(width)
        .height(height);

      svg.call(LS); // draw the cartogram shapes
      
      const circleScale = d3.scalePow()
        .domain([0, d3.max(data, d => Number(d['GLA Population Estimate 2015']))])
        .range([0, LS.blockSize()/2])

      console.log(circleScale.domain(), circleScale.range());
      
      LS.masked()
        .call(function(parent){
          parent.append('circle')
            .attr('r', d => {
              console.log(d); 
              return circleScale(d.data['GLA Population Estimate 2015'])
            })
            .attr('cx', LS.centroid()[0])
            .attr('cy', LS.centroid()[1])
            .attr('fill', '#f00');
        });
      
      LS.foreground()
        .call(function(parent){
          parent.append('text')
            .attr('class', 'borough-label')
            .attr('x', 5)
            .attr('y', 15)
            .text(d => d.LSAbbreviation);
        })
    })
    .catch(err=>{
      console.log(err);
    })
}