mapboxgl.accessToken = 'pk.eyJ1IjoiMjVwYXNzZXIiLCJhIjoiY2t4MHNtNGh0MTB3dDJubHlrcHF2dnpmMiJ9.YQrtunF-GEy5DtzbsFweww';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [-71.5209, -33.0214], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });