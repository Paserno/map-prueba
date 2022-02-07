mapboxgl.accessToken = 'pk.eyJ1IjoiMjVwYXNzZXIiLCJhIjoiY2t4MHNtNGh0MTB3dDJubHlrcHF2dnpmMiJ9.YQrtunF-GEy5DtzbsFweww';

const long = -71.5209854;
const lat = -37.0214519;


        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [long, lat], // starting position [lng, lat]
            zoom: 18 ,  // starting zoom
            hash: true
        });

        

        map.on('load', () => {
            // Add a GeoJSON source with 3 points.
            map.addSource('points', {
            'type': 'geojson',
            'data': {
            'type': 'FeatureCollection',
            'features': [
            {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'Point',
            'coordinates': [long, lat]
            }
            },
            {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'Point',
            'coordinates': [-90.3295, -0.6344]
            }
            },
            {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'Point',
            'coordinates': [-91.3403, 0.0164]
            }
            }
            ]
            }
            });


            // Add a circle layer
            map.addLayer({
            'id': 'circle',
            'type': 'circle',
            'source': 'points',
            'paint': {
            'circle-color': '#4264fb',
            'circle-radius': 8,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
            }
            });
             
            // Center the map on the coordinates of any clicked circle from the 'circle' layer.
            map.on('click', 'circle', (e) => {
            map.flyTo({
            center:  e.features[0].geometry.coordinates,
            zoom: 17
            });
            
            });
             
            // Change the cursor to a pointer when the it enters a feature in the 'circle' layer.
            map.on('mouseenter', 'circle', () => {
            map.getCanvas().style.cursor = 'pointer';
            });
             
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'circle', () => {
            map.getCanvas().style.cursor = '';
            });
            });

            map.on('click', 'states-layer', (e) => {
                new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML(e.features[0].properties.name)
                .addTo(map);
                });

                map.on('style.load', function() {
                    map.on('click', function(e) {
                      var coordinates = e.lngLat;
                      new mapboxgl.Popup()
                        .setLngLat(coordinates)
                        .setHTML('Hiciste click en: <br/>' + coordinates)
                        .addTo(map);
                    });
                  });