mapboxgl.accessToken = 'pk.eyJ1IjoiaGF0YTE5OTQiLCJhIjoiY2ptaTl6MnV0MDF6ejNxbXc4a2pwaTlwZCJ9.WceTUkYsuTOCswt2X13L3Q';
        const map2 = new mapboxgl.Map({
        container: 'map2', // container ID
        style: 'mapbox://styles/mapbox/light-v10', // style URL
        center: [-71.029, 42.316], // starting position
        zoom: 10.7 // starting zoom
        });
        // map2.scrollZoom.disable();
        // map2.addControl(new mapboxgl.NavigationControl());
        const nav = new mapboxgl.NavigationControl({
            visualizePitch: true
            });
            map2.addControl(nav, 'bottom-right');

        map2.addControl(
            new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
            })
        );

        map2.on('load', function() {
            map2.addSource("districtData", {
                type: "geojson",
                data: "Javascript/district.geojson"
            });

            // Add a new layer to visualize the polygon.
            map2.addLayer({
                'id': 'districtData',
                'type': 'fill',
                'source': 'districtData', // reference the data source
                'layout': {},
                'paint': {
                'fill-color': '#41168a', // blue color fill
                'fill-opacity': 0.2
                }
            });

            // Add a black outline around the polygon.
            map2.addLayer({
                    'id': 'outline',
                    'type': 'line',
                    'source': 'districtData',
                    'layout': {},
                    'paint': {
                    'line-color': 'black',
                    'line-width': 1,
                    'line-opacity': 0.5
                    }
            });
                
            const districts = {
                'type': 'FeatureCollection',
                'features': [
                {
                'type': 'Feature',
                'properties': {
                'description': "Dist. 1",
                },
                'geometry': {
                'type': 'Point',
                'coordinates': [-71.04154154898997, 42.37787420050006]
                }
                },
                {
                'type': 'Feature',
                'properties': {
                'description': 'Dist. 2',
                },
                'geometry': {
                'type': 'Point',
                'coordinates': [-71.05154154898997, 42.344428623838674] 
                }
                },
                {
                'type': 'Feature',
                'properties': {
                'description': 'Dist. 3',
                },
                'geometry': {
                'type': 'Point',
                'coordinates': [-71.05454154898997, 42.321228919555075]
                }
                },
                {
                'type': 'Feature',
                'properties': {
                'description': 'Dist. 4',
                },
                'geometry': {
                'type': 'Point',
                'coordinates': [-71.08809212649996, 42.291252310500056]
                }
                },
                {
                'type': 'Feature',
                'properties': {
                'description': "Dist. 5",
                },
                'geometry': {
                'type': 'Point',
                'coordinates': [-71.11520570704451, 42.270818055632004]
                }
                },
                {
                'type': 'Feature',
                'properties': {
                'description': 'Dist. 6',
                'icon': 'music-15'
                },
                'geometry': {
                'type': 'Point',
                'coordinates': [-71.12520570704451, 42.30314099050004]
                }
                },
                {
                'type': 'Feature',
                'properties': {
                'description': "Dist. 7",
                },
                'geometry': {
                'type': 'Point',
                'coordinates':  [-71.08434843043537, 42.321228919555075]
                }
                },
                {
                'type': 'Feature',
                'properties': {
                'description': 'Dist. 8',
                'icon': 'bicycle-15'
                },
                'geometry': {
                'type': 'Point',
                'coordinates': [-71.08342501504181, 42.3534102117147]
                }
                },
                {
                'type': 'Feature',
                'properties': {
                'description': "Dist. 9",
                },
                'geometry': {
                'type': 'Point',
                'coordinates': [-71.14342315976754, 42.35549625485971]
                }
                }
                ]
            };
        // Add a GeoJSON source containing place coordinates and information.
            map2.addSource('districts', {
                'type': 'geojson',
                'data': districts
            });
                
            map2.addLayer({
                'id': 'poi-labels',
                'type': 'symbol',
                'source': 'districts',
                'layout': {
                'text-field': ['format', ['get', 'description'], { 'font-scale': 1.1 }], 
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'], 
                'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                'text-justify': 'auto',
                }
            });
            
        });