# London Squared

A D3  module to support the creation of <a href="https://www.informationisbeautifulawards.com/showcase/842-london-squared-map-making-the-city-easier-to-read">award winning</a> <a href="https://aftertheflood.com/projects/future-cities-catapult/">London Squared</a> cartograms.

<img src="https://aftertheflood.com/wp-content/uploads/2017/11/london-squared-3.png" width="75%">

## Getting started

The quickest way to get going with this is __via a script tag__ (you'll also need to include D3)

```
  <script src="https://d3js.org/d3.v5.min.js"></script>
  <script src="https://unpkg.com/@aftertheflood/londonsquared/dist/index.js"></script>
```

If you're using webpack or something similar to compile your code you can __install bundle the 
via npm__

`npm install @aftertheflood/londonsquared`

_Data requirements_. Data is bound to shapes by the boroughs [standard code as defined by the ONS](http://geoportal.statistics.gov.uk/datasets/interim-local-authority-districts-april-2018-names-and-codes-in-the-united-kingdom).

## API

__londonSquared()__

Create a london squared layout

_Note: all the example code assumes you're using the module via the script tag method explained above so the `londonSquared` function is preceded by the `atf` global name-spacing variable._

```js
// create the londonSquared layout...
const LS = atf.londonSquared();

// render the cartogram by calling it on a d3 selection
d3.select('svg').call(LS)
```

__londonSquared.width([number]), londonSquared.height([number])__

Constrain the width height of the cartogram. If no argument is supplied the current width is returned. 

Because the aspect ratio of the cartogram is fixed the rendered cartogram may not be exactly the same size as the specified dimensions but it will be as big as possible.

```js
const LS = atf.londonSquared()
  .width(600)
  .height(600);
```

Set the height of the cartogram. If no argument is supplied the current height is returned.

__londonSquared.centroid()__

Returns the center point coordinates `[x, y]` for a an area of the cartogram relative the that area's registration point.

__londonSquared.blockSize()__

Returns the width or height (same thing) for a regular area of the cartogram. This is useful for constructing scales for the data to be visualised within each area of the cartogram.

__londonSquared.masked()__

This function returns a <a href="https://github.com/d3/d3-selection/blob/master/README.md">D3 selection</a> of groups which are masked by the shape of the borough which the represent allowing you to attach shapes and visualizations that will not overspill the bounds of the cartogram area.

__londonSquared.foreground()__

This function returns a <a href="https://github.com/d3/d3-selection/blob/master/README.md">D3 selection</a> of groups which are masked by the shape of the borough which the represent allowing you to attach shapes and visualizations that will overspill the bounds of the cartogram area.

__londonSquared.background()__

This function returns a <a href="https://github.com/d3/d3-selection/blob/master/README.md">D3 selection</a> of the cartogram area background shapes allowing you to change the colour and other properties of the cartogram area backgrounds.

__londonSquared.interaction()__

This function returns a <a href="https://github.com/d3/d3-selection/blob/master/README.md">D3 selection</a> of the cartogram area interaction shapes allowing you to change the colour and other properties of the cartogram area backgrounds.

What's an 'interaction shape'?  good question, interactoin shapes are invisible shapes which have the data data bound to them and are useful for attaching interaction behaviours, such as event listeners to. 

See the interactive example.

__londonSquared.data([array],[accessor])__

This function sets the data to bind to the cartogram areas (_array_)and the mechanism by which to bind it (_accessor_ function) returns the data as bound to the cartogram areas, including abbreviations, names etc for the 

```js
// bind and array of data "boroughData" to the cartogram areas by the property "ONS Area Code"

const LS = atf.londonSquared()
  .data(boroughData, d=>d['ONS Area Code'])
```

## Examples

 * <a href="http://aftertheflood.github.io/londonsquared/site/london-borough-population-now.html">A single variable visualisation</a> (<a href="https://github.com/aftertheflood/londonsquared/blob/master/site/london-borough-population-now.html">code</a>)
 * <a href="http://aftertheflood.github.io/londonsquared/site/london-borough-population-timeline.html">A time series visualization</a> (<a href="https://github.com/aftertheflood/londonsquared/blob/master/site/london-borough-population-interactive.html">code</a>)
 * <a href="http://aftertheflood.github.io/londonsquared/site/london-borough-population-interactive.html">Adding some interaction to the time series vizualisation</a> (<a href="https://github.com/aftertheflood/londonsquared/blob/master/site/london-borough-population-interactive.html">code</a>)

## Developing
For local development you can use these npm scrpts
 * `npm run build` uses <a href="https://webpack.js.org">webpack</a> to compile the code in the _src_ directory outputting to the _dist_ directory.
 * `npm run serve` runs <a href="https://browsersync.io">browser-sync</a> on the _site_ directory.
