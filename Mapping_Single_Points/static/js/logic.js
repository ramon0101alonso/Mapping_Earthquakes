// module 13.2.4
// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// the mapid will reference the id tag in our <div> element on the index.html file
let map = L.map('mapid').setView([40.7, -94.5], 4);

// We create the tile layer that will be the background of our map.
// tileLayer() method is being used
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',  // id attribute assigned it mapbox/streets-v-11 to show the streets on the map
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
// addTo() function will add the graymap object tile layer to our let map
streets.addTo(map);