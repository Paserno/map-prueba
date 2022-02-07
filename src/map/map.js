mapboxgl.accessToken = 'pk.eyJ1IjoiMjVwYXNzZXIiLCJhIjoiY2t4MHNtNGh0MTB3dDJubHlrcHF2dnpmMiJ9.YQrtunF-GEy5DtzbsFweww';

const long = -71.5209854;
const lat = -33.0214519;


        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [long, lat], // starting position [lng, lat]
            zoom: 18 ,  // starting zoom
            hash: true
        });


        