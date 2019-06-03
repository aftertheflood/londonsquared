A D3  module to support the creation of [London Squared](https://aftertheflood.com/projects/future-cities-catapult/) cartograms.

 * [Examples](/londonsquared/getting-started)
 * [API documentation](/londonsquared/api)
 * [More about the thinking behind London Squared](/londonsquared/design-process)
 * [Code on github](https://www.github.com/aftertheflood/londonsquared)

## Getting started

The quickest way to get started with the London Squared D3 module is by including the module in your page with a script tag (you'll also need to include D3). Just put the following tags into your HTML document and you're ready to go...

```html
<script src="https://d3js.org/d3.v5.min.js">
</script>
<script src="https://unpkg.com/@aftertheflood/londonsquared/dist/index.js">
</script>
```

If you're using webpack or something similar to compile your code you can install the package via npm.

```
npm install --save @aftertheflood/londonsquared
```

For next steps you could either read the [API documentation](/londonsquared/api), dive into some of the [code examples](https://github.com/aftertheflood/londonsquared/tree/master/site) or explore some interactive [Observable notebooks](https://beta.observablehq.com/collection/@tomgp/london-squared).

## A note about data requirements

With the London Squared module Data is bound to shapes by the boroughs' [standard ONS code](http://geoportal.statistics.gov.uk/datasets/interim-local-authority-districts-april-2018-names-and-codes-in-the-united-kingdom) so in order to bind your data to the layout you'll need to include those codes, by default you can include a property in each borough's data called _code_ and the layout should find that, if this isn't possible or convenient then you can specify an accessor function.

## Developing
For local development work on the London Squared module you should have NodeJS and npm installed. You can use these npm scripts

 * `npm run build` uses [webpack](https://webpack.js.org) to compile the code in the _src_ directory outputting to the _dist_ directory.
 * `npm run serve` runs [browser-sync](https://browsersync.io) on the _site_ directory.
