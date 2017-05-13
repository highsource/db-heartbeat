$(function() {
    // Setup leaflet map
    var map = new L.Map('map');

    var basemapLayer = new L.TileLayer('https://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png',
			{attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery &copy; <a href="http://mapbox.com">Mapbox</a>'});

    // Center map and default zoom level
    map.setView([51.5, 10.5], 6);


    // Adds the background layer to the map
    map.addLayer(basemapLayer);

    // Colors for AwesomeMarkers
    var _colorIdx = 0,
        _colors = [
          'blue',
          'red',
          'orange',
          'green',
          'purple',
          'darkred',
          'cadetblue',
          'darkgreen',
          'darkblue',
          'darkpurple'
        ];
        
    function _assignColor() {
        return _colors[_colorIdx++%10];
    }
    
    // =====================================================
    // =============== Playback ============================
    // =====================================================

/*	L.geoJson(lines, {
		style: function (feature) {
			return {color: 'black', weight:3, opacity: 1};
    		}
	}).addTo(map);
	L.geoJson(lines, {
		style: function (feature) {
			return {color: 'white', weight:2, opacity: 1, dashArray : '3, 3'};
    		}
	}).addTo(map);*/

/*	L.geoJson(stops, {
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, {
					radius: 6,
					fillColor: 'white',
					color: 'black',
					weight: 2,
					opacity: 1,
					fillOpacity: 1
				}).bindLabel(feature.properties.name + "<br/>(" + feature.properties.ds100 + " / " + feature.properties.evaNr + ")", { direction: 'auto' });
			}
	}).addTo(map);*/


    // Playback options
    var playbackOptions = {        
        speed: 512,
	fadeMarkersWhenStale: true,
	staleTime: 300000,
	tickLen: 60000,

        // layer and marker options
        layer: {
            pointToLayer : function(featureData, latlng){
                var result = {};
                
                if (featureData && featureData.properties && featureData.properties.path_options){
                    result = featureData.properties.path_options;
                }
                
                if (!result.radius){
                    result.radius = 5;
                }
                
                return new L.CircleMarker(latlng, result);
            }
        },
        
        marker: function(){
            return {
                icon: L.AwesomeMarkers.icon({
                    prefix: 'fa',
                    icon: 'train', 
                    markerColor: _assignColor()
                }) 
            };
        }        
    };
    
    // Initialize playback
    playback = new L.Playback(map, tracks, null, playbackOptions);
    playback.setSpeed(512);
    // Initialize custom control
    var control = new L.Playback.Control(playback);
    control.addTo(map);

    // playback.setCursor(46260000);
    playback.setSpeed(512);
    $('.speed').html(512).val(512);
});
