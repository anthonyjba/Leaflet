# Test CartoDB
  Html to render GeoJson From CartoDB using only JQuery, SQL API CartoDB and Web Worker.

## Step to load data from CartoDB
  
  * Get Bounding Box with the method Extent with the next url:

  https://rambo-test.cartodb.com/api/v2/sql?q=select ST_Extent(the_geom) as bextent from public.mnmappluto

  * Calculate the BoundingBox to divide in 4 tiles. 
  
  * Get data geojson in 4 times using web worker (file worker.js).
  
  * Url sample in worker.postMessage(url) :
  
  https://rambo-test.cartodb.com/api/v2/sql?q=SELECT st_asgeojson(the_geom) as features from public.mnmappluto 
  WHERE the_geom %26%26 ST_SetSRID(ST_MakeBox2D(
      ST_Point('+ tiles[1].xMin +', '+ tiles[1].yMin +'), 
      ST_Point('+ tiles[1].xMax +', '+ tiles[1].yMax +')), 4326)      
  
## Render GeoJson
  * Calculate the Center latlong by the Bounding Box.
  * Calculate the Scale with the zoom default.
  * Convert each point (longitude, latitude) to point GIS
  * Loop and draw each polygon over the Canvas.
  
## Optional Step
  * Zooming the map with scroll mouse (minimum zoom level: 1).
  * Get a static map to show/hide under the render Geojson.
  * Show/hide a grid tiles over the map.
  
