---
title:  Building a world map and markers with CSS
description: "A map is defined as a diagram or collection of data representing the spacial distribution of something. What's also an abstraction of something real? A webpage. "
category: css
draft: false
---

A map is defined as a diagram or collection of data representing the spacial distribution of something. What's also an abstraction of something real? A webpage. 

No wonder it's called a site. We've been using it to represent business cards, product catalogs, forms, designer's crazy parallax dreams and other similar essential things. You see, we're already very good at mapping content on the page and make it look appealing and meaningful.

The purpose of this article is to teach how to build a map, not an app map. An app map is google maps, open maps and every map you've seen on the web that requires a huge load of Javascript to run. For that, we'll shortly remember the what a coordinate is in order to convert it to percentage, which is what we need :blush: 

##  Coordinates

:exclamation: In this example, we're assuming that the earth is round.

The world map areas are divided by imaginary lines. The horizontal lines are called **longitude**, and the vertical lines are **latitudes**. The distance between these lines are calculated in degrees.

There's a know central point in the world map called Greenwich, which is a place in the Great Britain that the britons have decided to be the center of the world. From that point, longitude varies from 0 to -160 to the left and 0 to 160 to the right, making a total of 360 degrees. 

Latitude logic is the same, but the central point is where the Equator line is - a place where it always summer. From that point to the top, the latitude varies from 0 to 90 and 0 to -90 to the bottom, making a total of 160 degrees.
