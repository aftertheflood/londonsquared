## London Squared D3 module API

__londonSquared()__

Create a London Squared layout

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