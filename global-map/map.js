mapboxgl.accessToken = 'pk.eyJ1IjoicG1hcnRpc2EiLCJhIjoiY2t4OGNvaGFzMTh0cDJvcXVtdGY1MDIwNiJ9.2sGafjOIjrivBF6NTS8M2Q';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pmartisa/cl4lccqye000n14qb3zb69n9g',
    zoom: 1.7,
    maxZoom: 6,
    minZoom: 1, 
    center: [-10.95, 16.67],  
      projection: 'equirectangular',
    });

    // map 1

    map.on("load", function () {
      map.addLayer({
        id: "Missing migrants",
        type: "circle",
        source: {
          type: "geojson",
          data: "data/missing-migrants.geojson",
        },
          paint: { "circle-radius":
      ["interpolate", ["exponential", 2], ["zoom"],
      2, ["interpolate", ["linear"], ["get", "Total Number of Dead and Missing"],
      0, 6,
      170, 13
      ],
      6, ["interpolate", ["linear"], ["get", "Total Number of Dead and Missing"],
      0, 9,
      170, 30
      ],
    ],
    "circle-color": [
      "match",
      ["get", "Migrantion route"],
        "Western Mediterranean", "#543005",
        "Central Mediterranean", "#8c510a",
        "US-Mexico border crossing", "#bf812d",
        "Afghanistan to Iran", "#dfc27d", 
        "Western Africa / Atlantic route to the Canary Islands", "#f6e8c3",   
        "Turkey-Europe land route", "#f5f5f5",                                
        "Western Balkans", "#c7eae5",                               
        "Sahara Desert crossing", "#80cdc1",                                    
        "English Channel to the UK", "#35978f",                                
        "Belarus-EU border", "#01665e",                                    
        "Eastern Mediterranean", "#003c30",                                  
        "Darien Gap", "#bf842d",                                              
        "Caribbean to US", "#f5f3f2",                              
        "Horn of Africa to Yemen crossing", "#8c710a",
        "Dominican Republic to Puerto Rico", "#80cdc1",
        "Italy to France", "#bf832d",                         
        "#faedcd",
      ],


          'circle-stroke-color': 'black',
          'circle-stroke-width': 0.2,
          'circle-stroke-opacity': 0.7,
          'circle-opacity': {
      stops: [
        [2, 0.7],
        [6, 0.85]
      ]
       },
         },
         minzoom: 1,
},

"waterway-label"
);


// Create the popup
map.on('click', 'Missing migrants', function (e) {
  var routeName = e.features[0].properties['Migrantion route'];
  var source = e.features[0].properties['Information Source'];
  var date = e.features[0].properties['Incident Date']
  var minmissing = e.features[0].properties['Minimum Estimated Number of Missing'].toLocaleString('en-US');
  var mindead = e.features[0].properties['Number Dead'].toLocaleString('en-US');
  var survivors = e.features[0].properties['Number of Survivors'].toLocaleString('en-US');
  var Causedeath = e.features[0].properties['Cause of Death'];
  routeName = routeName.toUpperCase();
  new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML('<h4>' + routeName + '</h4>'
        +'<p>' + date + ' ' + '</p>'
        +'<p> <b>' +  'At least' + ' ' + mindead + ' ' +  'dead and' + ' ' + minmissing + ' ' + 'missing' + '</p>'
        + '<p>' + survivors + ' ' + 'survivors'+ '</b></p>'
        + '<p>' + 'Cause of death:'+ ' ' + Causedeath + '</p>'
        + '<p>' +  'Source:' + ' ' + source + '</p>')
    .addTo(map);
  });

  
  // Change the cursor to a pointer when the mouse is over the us_states_elections layer.
  map.on('mouseenter', 'Missing migrants', function () {
  map.getCanvas().style.cursor = 'pointer';
  });
  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'Missing migrants', function () {
  map.getCanvas().style.cursor = '';
  });
});