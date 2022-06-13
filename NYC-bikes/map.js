mapboxgl.accessToken = 'pk.eyJ1IjoicG1hcnRpc2EiLCJhIjoiY2t4OGNvaGFzMTh0cDJvcXVtdGY1MDIwNiJ9.2sGafjOIjrivBF6NTS8M2Q';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pmartisa/cl4bigyzn009i14nx3ymtx59g',
    zoom: 11,
    maxZoom: 13,
    minZoom: 10.5,
    center: [-73.95, 40.78],
    maxBounds: [
    [-180, 15],
    [-30, 72],
      ],
      pitch: 30, // pitch in degrees
      bearing: 50, // bearing in degrees
      projection: 'albers',
    });



// // initial code for map 2

mapboxgl.accessToken = 'pk.eyJ1IjoicG1hcnRpc2EiLCJhIjoiY2t4OGNvaGFzMTh0cDJvcXVtdGY1MDIwNiJ9.2sGafjOIjrivBF6NTS8M2Q';
var map2 = new mapboxgl.Map({
  container: 'map2',
  style: 'mapbox://styles/pmartisa/cl49x33fg001n14mo44amwlo3',
  zoom: 11,
  maxZoom: 13,
  minZoom: 10.5,
  center: [-73.95, 40.78],
    maxBounds: [
    [-180, 15],
    [-30, 72],
      ],
      pitch: 30, // pitch in degrees
      bearing: 50, // bearing in degrees
    projection: 'albers',
  });


// initial code for map 3

mapboxgl.accessToken = 'pk.eyJ1IjoicG1hcnRpc2EiLCJhIjoiY2t4OGNvaGFzMTh0cDJvcXVtdGY1MDIwNiJ9.2sGafjOIjrivBF6NTS8M2Q';
var map3 = new mapboxgl.Map({
  container: 'map3',
  style: 'mapbox://styles/pmartisa/cl49x33fg001n14mo44amwlo3',
  zoom: 11,
  maxZoom: 13,
  minZoom: 10.5,
  center: [-73.95, 40.78],
    maxBounds: [
    [-180, 15],
    [-30, 72],
      ],
      pitch: 30, // pitch in degrees
      bearing: 50, // bearing in degrees
    projection: 'albers',
  });



// initial code for map 4

mapboxgl.accessToken = 'pk.eyJ1IjoicG1hcnRpc2EiLCJhIjoiY2t4OGNvaGFzMTh0cDJvcXVtdGY1MDIwNiJ9.2sGafjOIjrivBF6NTS8M2Q';
var map4 = new mapboxgl.Map({
  container: 'map4',
  style: 'mapbox://styles/pmartisa/cl49x33fg001n14mo44amwlo3',
  zoom: 11,
  maxZoom: 13,
  minZoom: 10.5,
  center: [-73.95, 40.78],
    maxBounds: [
    [-180, 15],
    [-30, 72],
      ],
      pitch: 30, // pitch in degrees
      bearing: 50, // bearing in degrees
    projection: 'albers',
  });



// map 1 start trips 2020

map.on("load", function () {
    map.addLayer(
        {
        id: "stations-points-start20",
        type: "circle",
        source: {
            type: "geojson",
            data: "data/startStations20.geojson",
        },
        paint: {
            'circle-radius': {
                property: 'tripCount',
                type: 'exponential',
                stops: [
                  [{ zoom: 11, value: 1 }, 4],
                  [{ zoom: 11, value: 62 }, 6],
                  [{ zoom: 13, value: 1 }, 5],
                  [{ zoom: 13, value: 62 }, 10]
                ]
              },
        
            "circle-color": [
            "match",
            ["get", "percentiles"],
            "0-10",
            "#fff7ec",
            "10-20",
            "#ece2f0",
            "20-30",
            "#d0d1e6",
            "30-40",
            "#a6bddb",
            "40-50",
            "#67a9cf",
            "50-60",
            "#3690c0",
            "60-70",
            "#02818a",
            "70-80",
            "#016c59",
            "80-90",
            "#014636",
            "90-100",
            "#014636",
            "#fff7fb",
            ],
            'circle-stroke-color': 'white',
            'circle-stroke-width': 0.6,
            'circle-opacity': {
        stops: [
          [11, 0.8],
          [13, 1]
        ]
      }
    }
        },
        "waterway-label"
    );


    // Create the popup
map.on('click', 'stations-points-start20', function (e) {
    var stationName = e.features[0].properties.start_station_name;
    var totalTrips = e.features[0].properties.tripCount.toLocaleString('en-US');
    var customer = e.features[0].properties.Customer.toLocaleString('en-US');
    var subs = e.features[0].properties.Subscriber.toLocaleString('en-US');
    stationName = stationName.toUpperCase();
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML('<h4>' + stationName + '</h4>'
          +'<h2>' + totalTrips + ' ' +  'total trips' + '</h2>'
          + '<p>' + customer + ' ' + 'casual riders'+ '</p>'
          + '<p>'+ subs + ' ' + 'subscribers' + '</p>')
      .addTo(map);
    });
    // Change the cursor to a pointer when the mouse is over the us_states_elections layer.
    map.on('mouseenter', 'stations-points-start20', function () {
    map.getCanvas().style.cursor = 'pointer';
    });
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'stations-points-start20', function () {
    map.getCanvas().style.cursor = '';
    });
});



// // map 2 start trips 2021
map2.on("load", function () {
    map2.addLayer(
    {
    id: "stations-points-start21",
    type: "circle",
    source: {
        type: "geojson",
        data: "data/startStations21.geojson",
    },
    minzoom: 6,
    paint: {
        'circle-radius': {
            property: 'tripCount',
            type: 'exponential',
            stops: [
              [{ zoom: 11, value: 1 }, 4],
              [{ zoom: 11, value: 62 }, 6],
              [{ zoom: 13, value: 1 }, 5],
              [{ zoom: 13, value: 62 }, 10]
            ]
          },
        "circle-color": [
        "match",
        ["get", "percentiles"],
        "0-10",
        "#fff7ec",
        "10-20",
        "#ece2f0",
        "20-30",
        "#d0d1e6",
        "30-40",
        "#a6bddb",
        "40-50",
        "#67a9cf",
        "50-60",
        "#3690c0",
        "60-70",
        "#02818a",
        "70-80",
        "#016c59",
        "80-90",
        "#014636",
        "90-100",
        "#014636",
        "#fff7fb",
        ],
        'circle-stroke-color': 'white',
            'circle-stroke-width': 0.6,
            'circle-opacity': {
        stops: [
          [11, 0.8],
          [13, 1]
        ]
      }
    }
    },
    "waterway-label"
);
   
    // Create the popup
map2.on('click', 'stations-points-start21', function (e) {
    var stationName = e.features[0].properties.start_station_name;
    var totalTrips = e.features[0].properties.tripCount.toLocaleString('en-US');
    var customer = e.features[0].properties.casual.toLocaleString('en-US');
    var subs = e.features[0].properties.member.toLocaleString('en-US');
    stationName = stationName.toUpperCase();
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML('<h4>' + stationName + '</h4>'
          +'<h2>' + totalTrips + ' ' +  'total trips' + '</h2>'
          + '<p>' + customer + ' ' + 'casual riders'+ '</p>'
          + '<p>'+ subs + ' ' + 'subscribers' + '</p>')
      .addTo(map2);
    });
    // Change the cursor to a pointer when the mouse is over the us_states_elections layer.
    map2.on('mouseenter', 'stations-points-start21', function () {
    map2.getCanvas().style.cursor = 'pointer';
    });
    // Change it back to a pointer when it leaves.
    map2.on('mouseleave', 'stations-points-start21', function () {
    map2.getCanvas().style.cursor = '';
    });

// map 3 end trips 2020
    map3.on("load", function () {
        map3.addLayer(
            {
            id: "stations-points-end20",
            type: "circle",
            source: {
                type: "geojson",
                data: "data/endStations20.geojson",
            },
            paint: {
                'circle-radius': {
                    property: 'tripCount',
                    type: 'exponential',
                    stops: [
                      [{ zoom: 11, value: 1 }, 4],
                      [{ zoom: 11, value: 62 }, 6],
                      [{ zoom: 13, value: 1 }, 5],
                      [{ zoom: 13, value: 62 }, 10]
                    ]
                  },
            
                "circle-color": [
                "match",
                ["get", "percentiles"],
                "0-10",
                "#fff7ec",
                "10-20",
                "#ece2f0",
                "20-30",
                "#d0d1e6",
                "30-40",
                "#a6bddb",
                "40-50",
                "#67a9cf",
                "50-60",
                "#3690c0",
                "60-70",
                "#02818a",
                "70-80",
                "#016c59",
                "80-90",
                "#014636",
                "90-100",
                "#014636",
                "#fff7fb",
                ],
                'circle-stroke-color': 'white',
                'circle-stroke-width': 0.6,
                'circle-opacity': {
            stops: [
              [11, 0.8],
              [13, 1]
            ]
          }
        }
            },
            "waterway-label"
        );
    
    
        // Create the popup
    map3.on('click', 'stations-points-end20', function (e) {
        var stationName = e.features[0].properties.end_station_name;
        var totalTrips = e.features[0].properties.tripCount.toLocaleString('en-US');
        var customer = e.features[0].properties.Customer.toLocaleString('en-US');
        var subs = e.features[0].properties.Subscriber.toLocaleString('en-US');
        stationName = stationName.toUpperCase();
        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML('<h4>' + stationName + '</h4>'
              +'<h2>' + totalTrips + ' ' +  'total trips' + '</h2>'
              + '<p>' + customer + ' ' + 'casual riders'+ '</p>'
              + '<p>'+ subs + ' ' + 'subscribers' + '</p>')
          .addTo(map3);
        });
        // Change the cursor to a pointer when the mouse is over the us_states_elections layer.
        map3.on('mouseenter', 'stations-points-end20', function () {
        map3.getCanvas().style.cursor = 'pointer';
        });
        // Change it back to a pointer when it leaves.
        map3.on('mouseleave', 'stations-points-end20', function () {
        map3.getCanvas().style.cursor = '';
        });
    });


// map 4 end trips 2021
map4.on("load", function () {
    map4.addLayer(
    {
    id: "stations-points-end21",
    type: "circle",
    source: {
        type: "geojson",
        data: "data/endStations21.geojson",
    },
    minzoom: 6,
    paint: {
        'circle-radius': {
            property: 'tripCount',
            type: 'exponential',
            stops: [
              [{ zoom: 11, value: 1 }, 4],
              [{ zoom: 11, value: 62 }, 6],
              [{ zoom: 13, value: 1 }, 5],
              [{ zoom: 13, value: 62 }, 10]
            ]
          },
        "circle-color": [
        "match",
        ["get", "percentiles"],
        "0-10",
        "#fff7ec",
        "10-20",
        "#ece2f0",
        "20-30",
        "#d0d1e6",
        "30-40",
        "#a6bddb",
        "40-50",
        "#67a9cf",
        "50-60",
        "#3690c0",
        "60-70",
        "#02818a",
        "70-80",
        "#016c59",
        "80-90",
        "#014636",
        "90-100",
        "#014636",
        "#fff7fb",
        ],
        'circle-stroke-color': 'white',
            'circle-stroke-width': 0.6,
            'circle-opacity': {
        stops: [
          [11, 0.8],
          [13, 1]
        ]
      }
    }
    },
    "waterway-label"
);
   
    // Create the popup
map4.on('click', 'stations-points-end21', function (e) {
    var stationName = e.features[0].properties.end_station_name;
    var totalTrips = e.features[0].properties.tripCount.toLocaleString('en-US');
    var customer = e.features[0].properties.casual.toLocaleString('en-US');
    var subs = e.features[0].properties.member.toLocaleString('en-US');
    stationName = stationName.toUpperCase();
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML('<h4>' + stationName + '</h4>'
          +'<h2>' + totalTrips + ' ' +  'total trips' + '</h2>'
          + '<p>' + customer + ' ' + 'casual riders'+ '</p>'
          + '<p>'+ subs + ' ' + 'subscribers' + '</p>')
      .addTo(map4);
    });
    // Change the cursor to a pointer when the mouse is over the us_states_elections layer.
    map4.on('mouseenter', 'stations-points-end21', function () {
    map4.getCanvas().style.cursor = 'pointer';
    });
    // Change it back to a pointer when it leaves.
    map4.on('mouseleave', 'stations-points-end21', function () {
    map4.getCanvas().style.cursor = '';
    });
}); 

});


