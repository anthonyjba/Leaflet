;
(function(window, undefined) {
    function _getCommonBounds(bounds) {
        return bounds.reduce(function(prev, cur) {
            return [Math.min(prev[0], cur[0]), Math.min(prev[1], cur[1]), Math.max(prev[2], cur[2]), Math.max(prev[3], cur[3])]
        }, [Infinity, Infinity, -Infinity, -Infinity]);
    }
 
    function _getGeometryBounds(coords, type) {
        switch (type) {
            case "Point":
                return [coords[0], coords[1], coords[0], coords[1]];
            case "LineString":
            case "MultiPoint":
                return coords.reduce(function(prev, cur) {
                    return [Math.min(prev[0], cur[0]), Math.min(prev[1], cur[1]), Math.max(prev[2], cur[0]), Math.max(prev[3], cur[1])]
                }, [Infinity, Infinity, -Infinity, -Infinity]);
            case "Polygon":
            case "MultiLineString":
                return _getCommonBounds(coords.map(function(lineString) {
                    return _getGeometryBounds(lineString, "LineString");
                }));
            case "MultiPolygon":
                return _getCommonBounds(coords.map(function(polygon) {
                    return _getGeometryBounds(polygon, "Polygon");
                }));
        }
    }
 
    function getGeometryBounds(geometry) {
        if (geometry.bbox) return geometry.bbox;
        if (geometry.type === "GeometryCollection")
            return _getCommonBounds(geometry.geometries.map(getGeometryBounds));
        return _getGeometryBounds(geometry.coordinates, geometry.type)
    }
 
    function getFeatureBounds(feature) {
        return getGeometryBounds(feature.geometry);
    }
 
    function getBounds(obj) {
        if (obj.bbox) return obj.bbox;
        if (obj.coordinates || obj.geometries) return getGeometryBounds(obj);
        if (obj.type === "Feature") return getFeatureBounds(obj);
        if (obj.type === "FeatureCollection") return _getCommonBounds(obj.features.map(getFeatureBounds));
    }
 
    var GeoJSONUtils = function() {}
    GeoJSONUtils.prototype = {
        getBounds: getBounds,
        getCommonBounds: _getCommonBounds
    };
    window.gjutils = new GeoJSONUtils();
})(window);
//source: https://sdk.hexagongeospatial.com/index.php?title=GeoJSON_getBounds