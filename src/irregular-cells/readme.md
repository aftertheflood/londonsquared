## Making the map

The London Squared layout definition is made of two parts.

First, defined in the [ls-layout.js](https://github.com/aftertheflood/londonsquared/blob/master/src/ls-layout.js) file we have coordinates and other information for each borough in an array.

```js
{
  "LSAbbreviation":"stn", // the London Squared short code for the borough
  "x":"3",  // the boroughs vertical position in a grid
  "y":"6",  // its horizontal position
  "irregular":false, // whether the borough requires an irregular path
  "code":"E09000029", // the ONS code for the borough
  "name":"Sutton" // the full name of the borough
}
```

Second, in [irregular-cells/paths.json](https://github.com/aftertheflood/londonsquared/blob/master/src/irregular-cells/paths.json) via [ls-path.js](https://github.com/aftertheflood/londonsquared/blob/master/src/ls-path.js) we define the outlines of the irregular cells (those along the course of the Thames) in [SVG path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) syntax. The SVG paths are based on the convention that a regular cell is a square of side 100 pixels with their top left corner at (0, 0).

## Editing paths

There are couple of tools which can be used to help in the editing of the irregular paths. First `paths2svg.js` which will typically be run like this... 

```
node paths2svg.js paths.json > paths.svg
``` 

This will result in the current paths being put into an SVG suitable for editing in a graphics package of your choosing (I use [Affinity Designer](https://affinity.serif.com/en-gb/designer/) as it's affordable and the SVG export options are solid and predictable). Once you're happy with the paths you can export them from the editor as an SVG (in Affinity use the _File_ -> _Export_ and then select SVG and the 'for export' preset).With the SVG saved you can use the second tool `svg2paths.js` to create the irregular cells JSON file 

```
node svg2paths.js paths.svg > paths.json
```

