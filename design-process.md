
## Future Cities Catapult
   [Future Cities Catapult](https://futurecities.catapult.org.uk) has many programmes that require data analysis. London Squared came out of a partnership between us to develop product ideas that would help them and their network — anyone working in this field who wanted to create, use, and share data better. Key to this was the ability to compare data across the city’s 32 boroughs (33 if you include The City of London, not officially a borough). Unfortunately at the moment the only way of doing that spatially was to use a geographical map ...
    
## The Trouble With Data Maps

Maps are excellent for navigating space, showing boundaries, landmarks, and location but lousy at imparting data. The visual impact of data shown in a spatial way is driven by the way areas of that space are divided. Low quantities seem higher if taking up more space. High qualities in lots of space dominate. Maps are uneven spaces – more developed areas tend to be smaller than rural areas. This creates an uneven ground on which to place figures – with important data finding no place to live.

![a variety of maps showing data encoded as colour](assets/images/london-collage.jpg)
    
During the product development work with Future Cities Catapult, it became clear that there was a need for a way to visual data across all boroughs that did not create a visual bias due to the relative size of individual boroughs.

We needed a new, non-geographic system to plot data.
    
## Abstracting the City
    
How can a city be reshaped to allow for a more even presentation of data without obliterating the forms that make it a recognizable space?
    
<div class="grid">
  <div markdown="1">
![a simple abstraction of london boroughs into squares](assets/images/abstraction-1.jpg)

Having got the squares to work, we needed to bring some basic recognisability back to the map. We wanted a degree of familiarity for the first time viewer. 
  </div>
  <div markdown="1">
![a map showing the boroughs and the course of the Thames through them](assets/images/abstraction-2.jpg)

London’s most recognisable geographic feature is the River Thames. We started to restyle it to fit between the squares, choosing which of it’s curves were most iconic.
  </div>
  <div markdown="1">
![an illustration of the Thames showing how only a few features are required to render its shape recognisable](assets/images/abstraction-3.jpg)

Our first idea was to just have it running through the middle as an illustrative element, but this seemed clumsy and would interrupt the eye as it ‘read the city’.
  </div>
  <div markdown="1">
![the finished design](assets/images/abstraction-4.jpg)

Instead, we put the city back together, forcing it to give way to the key curves of the Thames – just as in real life. As a shape this also gave some poetry to the rational grid.
  </div>
</div>

## The Square Unit
    
Squares have the added benefit of being able to contain more data. Unlike circles, there are enough options for spatial significance in a square – top, bottom, left, right. Squares have space to allow data to be separate or connected to other data. The squares are also a usefully small module that can be shared individually when needed, and because of their regularised and bite-size scale, they work well on small screens.


![a set of square data visualizations](assets/images/square-unit.jpg)

The names of the boroughs have been abbreviated and vowels removed for maximum recognition and efficiency. This function needs to allow first time users to orient themselves as well as regular viewers to remind themselves and not have an obstructed view.

## The London Squared Map, Version 1.0

The most basic map allows for a choropleth, or shaded cells, to show data. There has been minimal shuffling of the – and the placement of the river finishes this off economically. The basic map shows one set of data, but there are other possibilities for combining display types.

![the London Squared cartogram layout as used to visualise a data set](assets/images/london-squared-1.jpg)

<div class="grid">
  <div markdown="1">

![bar charts on the London Squared layout](assets/images/london-squared-2.jpg)

Bar charts are tricky to use in this space, but not impossible – and much easier than with a geographically accurate map!

  </div>
  <div markdown="1">

![line charts on the London Squared layout](assets/images/london-squared-3.jpg)

Line charts can be mapped across the centre of the grid units. The river is an obstacle, but if the y-axis is limited to just the middle 60% of the squares there aren’t any issues.

  </div>
  <div markdown="1">

![circles on the London Squared layout](assets/images/london-squared-4.jpg)

Dots can be used to visualise quantities, and the use of colour multiplication lets us stack up sets of dots.

  </div>
  <div markdown="1">

![layered visualisation techniques on the  London Squared layout](assets/images/london-squared-5.jpg)

Bringing it all home, combining shading, dots, and numerical display for a richer account of the data.

  </div>
</div>

We have plenty more work to do on the amount of data that can be shown and how to show different quantities and types of data. Watch this space.

Source: [London data store](https://data.london.gov.uk)