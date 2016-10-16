# Leaflet
Apps about Leaflet with (d3js, crossfilter.js, dc.js, angularJS, etc...)

# vector-tile-spec
The Vector Tile format uses Google Protocol Buffers as a encoding format. Protocol Buffers are a language-neutral, platform-neutral extensible mechanism for serializing structured data

source: https://github.com/mapbox/vector-tile-spec/tree/master/2.1

# mbtiles-spec
MBTiles is a specification for storing tiled map data in SQLite databases for immediate usage and for transfer. MBTiles files, known as tilesets, must implement the specification below to ensure compatibility with devices.

UTFGrid: The MBTiles specification previously contained the UTFGrid specification. It was removed in version 1.2 and moved into its own specification with synced version numbers - so MBTiles 1.2 is compatible with UTFGrid 1.2. The specs integrate but do not require each other for compliance.

source: https://github.com/mapbox/mbtiles-spec

# rbush
RBush — a high-performance JavaScript R-tree-based 2D spatial index for points and rectangles

Demos: [uniformly distributed random data](http://mourner.github.io/rbush/viz/viz-uniform.html), [randomly clustered data](http://mourner.github.io/rbush/viz/viz-cluster.html)
source: https://github.com/mourner/rbush

## Performance
 
 The following sample performance test was done by generating
 random uniformly distributed rectangles of ~0.01% area and setting `maxEntries` to `16`
 (see `debug/perf.js` script).
 Performed with Node.js v5.2.0 on a Retina Macbook Pro 15 (mid-2012).
 
 Test                         | RBush  | [old RTree](https://github.com/imbcmdth/RTree) | Improvement
 ---------------------------- | ------ | ------ | ----
 insert 1M items one by one   | 4.7s   | 9.26s  | 2x
 1000 searches of 0.01% area  | 0.06s  | 1.12s  | 20x
 1000 searches of 1% area     | 0.43s  | 2.73s  | 6.3x
 1000 searches of 10% area    | 2.19s  | 11.56s | 5.3x
 remove 1000 items one by one | 0.02s  | 1.44s  | 65x
 bulk-insert 1M items         | 1.38s  | n/a    | 6.7x

# tippecanoe
Builds vector tilesets from large collections of GeoJSON features. This is a tool for making maps from huge datasets.

Samples:
https://github.com/mapbox/tippecanoe/blob/master/MADE_WITH.md
https://a.tiles.mapbox.com/v4/weatherdecisiontechnologies.lgk0k0f6/page.html?access_token=pk.eyJ1Ijoid2VhdGhlcmRlY2lzaW9udGVjaG5vbG9naWVzIiwiYSI6IkhLM1dMUDgifQ.ykvRdysqB6BgpQKZ_x7dhg#6/29.200/-89.209

# twkb
javascript library allows to decode TWKB

twkb.toGeoJSON(buffer)
source: https://github.com/TWKB/twkb.js

# TWKB_web
Examples to show how to handle TWKB in web server and client

source: https://github.com/nicklasaven/twkb_web

# cartodb
http://ekonlab.cartodb.com/viz/9ff4f0ba-9819-11e4-92cc-0e853d047bba/embed_map

# mapbox
Analisis Demos: https://github.com/mapbox/analysis-demos/tree/mb-pages/trees
https://www.mapbox.com/blog/introducing-geojson-vt/
https://www.mapbox.com/blog/qa-tiles-extracts/
https://www.mapbox.com/analysis-demos/philly-properties/#?center=-75.1759,39.9361&radius=234&zoom=15.00
http://www.neptisgeoweb.org/

# QuadTree
Algorithms
http://blog.notdot.net/2009/11/Damn-Cool-Algorithms-Spatial-indexing-with-Quadtrees-and-Hilbert-Curves

# Idealista
http://www.idealista.com/labs/blog/idealista/automatizando-pruebas-en-idealista-con-selenium-y-nightwatch-js/

# Article (AngularJS, WebPack)
http://charb.it/2015/09/08/yet-another-angular-es6-webpack-seed/

# Functional Programming
https://codek.tv/v/HvMemAgOw6I/scenic-city-summit-2016-jeremy-fairbank-functional-programming-basics-in-es6-javascript/

ES2016+?
https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.49p7zmpvo
