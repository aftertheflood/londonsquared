<div class="full-width">

<h2>Getting started</h2>

<p>The quickest way to get started with the London Squared D3 module is by including the module in your page with a script tag (you'll also need to include D3). Just put the following tags into your HTML document and you're ready to go...</p>

<pre>
  <script src="https://d3js.org/d3.v5.min.js">
  </script>
  <script src="https://unpkg.com/@aftertheflood/londonsquared/dist/index.js">
  </script>
</pre>

<p>If you're using webpack or something similar to compile your code you can install bundle the via npm.</p>

<pre>npm install --save @aftertheflood/londonsquared</pre>

<p>
For next steps you could either read the API documentation or dive into some of the code examples.
</p>
<h3>A note about data requirements</h3>

<p>With the London Squared module Data is bound to shapes by the boroughs' <a href="http://geoportal.statistics.gov.uk/datasets/interim-local-authority-districts-april-2018-names-and-codes-in-the-united-kingdom">standard ONS code</a> so in order to bind your data to the layout you'll need to include those codes, by default you can include a property in each borough's data called _code_ and the layout should find that, if this isn't possible of convenient then you can specify an accessor function.</p>

</div>