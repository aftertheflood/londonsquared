A D3  module to support the creation of [London Squared](https://aftertheflood.com/projects/future-cities-catapult/) cartograms.

 * [Examples](/londonsquared/api)
 * [Getting started](/londonsquared/getting-started)
 * [More about the thinking behind London Squared](/londonsquared/design-process)
 * [Code on github](https://www.github.com/aftertheflood/londonsquared)

## London Squared D3 module. API

#### londonSquared([object])

Create a London Squared layout. 

The optional `object` argument can be used to bulk assign values which might otherwise be set by the individual, explicit API functions. An example of such a configuration object might look something like this...

```js
{
  width: 800,
  height: 700,
  accessor: d => d.code,
  classPrefix: 'ls',
  gridGapProportion: 0.05,
}
```

_Note: all the example code assumes you're using the module via the script tag method explained above so the `londonSquared` function is preceded by the `atf` global name-spacing variable._

```js
// create the londonSquared layout...
const LS = atf.londonSquared();

// render the cartogram by calling it on a d3 selection
d3.select('svg').call(LS)
```

#### londonSquared.width([number]), londonSquared.height([number])

Constrain the width height of the cartogram. If no argument is supplied the current width is returned. 

Because the aspect ratio of the cartogram is fixed the rendered cartogram may not be exactly the same size as the specified dimensions but it will be as big as possible.

```js
const LS = atf.londonSquared()
  .width(600)
  .height(600);
```

Set the height of the cartogram. If no argument is supplied the current height is returned.

#### londonSquared.centroid()

Returns the center point coordinates `[x, y]` for a an area of the cartogram relative the that area's registration point.

#### londonSquared.blockSize()

Returns the width or height (same thing) for a regular area of the cartogram. This is useful for constructing scales for the data to be visualised within each area of the cartogram.

#### londonSquared.masked()

This function returns a [D3 selection](https://github.com/d3/d3-selection/blob/master/README.md) of groups which are masked by the shape of the borough which the represent allowing you to attach shapes and visualizations that will not overspill the bounds of the cartogram area.

#### londonSquared.foreground()

This function returns a [D3 selection](https://github.com/d3/d3-selection/blob/master/README.md) of groups which are masked by the shape of the borough which the represent allowing you to attach shapes and visualizations that will overspill the bounds of the cartogram area.

#### londonSquared.background()

This function returns a [D3 selection](https://github.com/d3/d3-selection/blob/master/README.md) of the cartogram area background shapes allowing you to change the colour and other properties of the cartogram area backgrounds.

#### londonSquared.interaction()

This function returns a [D3 selection](https://github.com/d3/d3-selection/blob/master/README.md) of the cartogram area interaction shapes allowing you to change the colour and other properties of the cartogram area backgrounds.

What's an 'interaction shape'?  Good question, interaction shapes are invisible shapes which have the data data bound to them and are useful for attaching interaction behaviours, such as event listeners to. 

See the interactive example: [Demo](http://aftertheflood.github.io/londonsquared/site/london-borough-population-interactive.html), [Code](https://github.com/aftertheflood/londonsquared/blob/master/site/london-borough-population-interactive.html).

#### londonSquared.data([array],[accessor])

This function sets the data to bind to the cartogram areas (_array_)and the mechanism by which to bind it (_accessor_ function) returns the data as bound to the cartogram areas, including abbreviations, names etc for the 

```js
// bind and array of data "boroughData" 
// to the cartogram areas by the property 
// "ONS Area Code"

const LS = atf.londonSquared()
  .data(boroughData, d=>d['ONS Area Code'])
```

#### londonSquared.gridGapProportion([number])

This function sets the size of the gap between the cells of the cartogram as a proportion of a square cell. The value should lie between between 0 and 1 inclusive.
If no number is specified the function returns the current value. The default value is 0.05 i.e. if a square cell is calculated as 100px 