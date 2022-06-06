mapboxgl.accessToken = 'pk.eyJ1IjoicG1hcnRpc2EiLCJhIjoiY2t4OGNvaGFzMTh0cDJvcXVtdGY1MDIwNiJ9.2sGafjOIjrivBF6NTS8M2Q';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pmartisa/cl3ugxy5900a314qqsf34cfje',
    zoom: 3.5,
    maxZoom: 9,
    minZoom: 3.5,
    center: [-105, 40],
    maxBounds: [
      [-180, 15],
      [-30, 72],
    ],  // starting position [lng, lat]
    projection: "albers",
});

// // code for map 2

mapboxgl.accessToken = 'pk.eyJ1IjoicG1hcnRpc2EiLCJhIjoiY2t4OGNvaGFzMTh0cDJvcXVtdGY1MDIwNiJ9.2sGafjOIjrivBF6NTS8M2Q';
var map2 = new mapboxgl.Map({
  container: 'map2',
  style: 'mapbox://styles/pmartisa/cl40ct48x000j15p8xfr13jg8', // stylesheet location
  zoom: 3.5, // starting zoom
  maxZoom: 9.5,
  minZoom: 3.5,
  center: [-100, 40], // starting position [lng, lat]
  maxBounds: [
    [-180, 15],
    [-30, 72],
  ],
  projection: "albers",
}); 


map.on("load", function () {
  map.addLayer({
    id: "us_states_sectors_outline",
    type: "line",
    source: {
      type: "geojson",
      data: "data/statesSectors.geojson",
    },
    paint: {
      "line-color": "#ffffff",
      "line-width": 0.7,
    },
   }, "waterway-label"
  );
  
  map.addLayer({
    id: "us_states_sectors",
    type: "fill",
    source: {
      type: "geojson",
      data: "data/statesSectors.geojson",
    },
    maxzoom: 6,
    paint: {
      "fill-color": [
        "match", 
        ["get", "MostCommon"],
        "Farming", "#008080",
        "Federal/State Government", "#70a494",
        "Manufacturing", "#b4c8a8",
        "Mining", "#f6edbd",
        "Nonspecialized", "#edbb8a",
        "Recreation", "#de8a5a",
        "#ca562c",
      ],
      "fill-outline-color": "#ffffff",
      "fill-opacity": [
          "step",
          ["get", "WnrPct"],
          0.3,
          0.4,
          0.5,
          0.5,
          0.7,
          0.6,
          0.9,
        ],
    },
  }, "us_states_sectors_outline");

  

  map.addLayer({
    id: "us_counties_sectors_outline",
    type: "line",
    source: {
      type: "geojson",
      data: "data/data-county.geojson",
    },
    minzoom: 5,
    paint: {
      "line-color": "#ffffff",
      "line-width": 0.25,
    },
  },
  "us_states_sectors"
);

  map.addLayer({
    id: "us_counties_sectors",
    type: "fill",
    source: {
      type: "geojson",
      data: "data/data-county.geojson",
    },
    minzoom: 4,
    paint: {
      "fill-color": [
        "match",
        ["get", "Economic_Type_Label"],
        "Farming", "#008080",
        "Federal/State Government", "#70a494",
        "Manufacturing", "#b4c8a8",
        "Mining", "#f6edbd",
        "Nonspecialized", "#edbb8a",
        "Recreation", "#de8a5a",
        "#ca562c",
      ],
      "fill-outline-color": "#ffffff",
    },
  },
  "us_counties_sectors_outline"
);
});


// Create the popup
map.on('click', 'us_states_sectors', function (e) {
var stateName = e.features[0].properties.State;
var winner = e.features[0].properties.MostCommon;
var wnrPerc = e.features[0].properties.WnrPct;
wnrPerc = (wnrPerc * 100).toFixed(0);
stateName = stateName.toUpperCase();
new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('<h4>'+stateName+'</h4>'
      +'<h2>'+winner+'</h2>'
      + '<p>'+wnrPerc+'% of total counties</p>')
  .addTo(map);
});
// Change the cursor to a pointer when the mouse is over the us_states_elections layer.
map.on('mouseenter', 'us_states_sectors', function () {
map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a pointer when it leaves.
map.on('mouseleave', 'us_states_sectors', function () {
map.getCanvas().style.cursor = '';
});

map.on('click', 'us_counties_sectors', function (e) {
var stateName = e.features[0].properties.State;
var countyName = e.features[0].properties.County_name;
var winner = e.features[0].properties.Economic_Type_Label	;
stateName = stateName.toUpperCase();
countyName = countyName.toUpperCase();
new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('<h4>' + countyName + ' - ' + stateName + '</h4>'
      + '<h3>' + winner + '</h3>')
  .addTo(map);
});
map.on('mouseenter', 'us_counties_sectors', function () {
map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'us_counties_sectors', function () {
map.getCanvas().style.cursor = '';
});






// map 2
map2.on("load", function () {
  map2.addLayer(
    {
      id: "us_brutality_states",
      type: "circle",
      source: {
        type: "geojson",
        data: "data/policeBrutality.geojson",
      },
      paint: {
       "circle-radius": {
         'base': 100,
         'stops': [
           [12, 8],
           [22, 120]
         ]
       },
       "circle-stroke-color": "#000000",
        "circle-opacity": 0.75,
        "circle-color": [
          "match",
          ["get", "state"],
          "Pennsylvania",
          "#f6d2a9",
          "Virginia",
          "#f5b78e",
          "California",
          "#f19c7c",
          "New Mexico",
          "#ea8171",
          "Utah",
          "#ca5268",
          "Vermont",
          "#fbe6c5",
          "Wyoming",
          "#f5ba98",
          "Georgia",
          "#ee8a82",
          "South Carolina",
          "#dc7176",
          "Michigan",
          "#c8586c",
          "Tennessee",
          "#9c3f5d",
          "Missouri",
          "#70284a",
          "North Carolina",
          "#cf635d",
          "Louisiana",
          "#fde0c5",
          "Iowa",
          "#facba6",
          "New Jersey",
          "#f8b58b",
          "South Dakota",
          "#f2855d",
          "Nebraska",
          "#ef6a4c",
          "Oklahoma",
          "#eb4a40",
          "Rhode Island",
          "#cf635d",
          "Minnesota",
          "#9c3f5d",
          "Kentucky",
          "#ef6a4c",
          "Delaware",
          "#c8586c",
          "Nevada",
          "#cf635d",
          "Arkansas",
          "#9c3f5d",
          "Illinois",
          "#70284a",
          "Arizona",
          "#cf635d",
          "Florida",
          "#70284a",
          "Indiana",
          "#f8b58b",
          "Colorado",
          "#70284a",
          "Ohio",
          "#70284a",
          "Wisconsin",
          "#facba6",
          "North Dakota",
          "#cf635d",
          "Oregon",
          "#70284a",
          "Alabama",
          "#ef6a4c",
          "Massachusetts",
          "#cf635d",
          "Washington DC",
          "#9c3f5d",
          "New York",
          "#c8586c",
          "Texas",
          "#f19c7c",
          "Connecticut",
          "#9c3f5d",
          "Kansas",
          "#9c3f5d",
          "Washington",
          "#f6d2a9",
          "#ffffff",
        ],
      },
      minzoom: 3,
    },
    "waterway-label"
  );
});

map2.on("click", "us_brutality_states", function (e) {
  var stateName = e.features[0].properties.state;
  var city = e.features[0].properties.city;
  var date = e.features[0].properties.date;
  var name = e.features[0].properties.name;
  var desc = e.features[0].properties.description;
  // wnrPerc = (wnrPerc * 100).toFixed(0);
  // totalVotes = totalVotes.toLocaleString();
  stateName = stateName.toUpperCase();
  city = city.toUpperCase();
  new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(
      "<h4>" +
        city +
        " - " +
        stateName +
        "</h4>" +
        "<h3>" +
        date +
        "</h3>" +
        "<p>" +
        name +
        "</p>" +
        "<p>" +
        "<b>SUMMARY</b>" + "<br>" + desc + 
        "<p>" 
    )
    .addTo(map2);
});
map2.on("mouseenter", "us_brutality_states", function () {
  map2.getCanvas().style.cursor = "pointer";
});
map2.on("mouseleave", "us_brutality_states", function () {
  map2.getCanvas().style.cursor = "";
});

