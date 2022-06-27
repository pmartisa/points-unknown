mapboxgl.accessToken = 'pk.eyJ1IjoicG1hcnRpc2EiLCJhIjoiY2t4OGNvaGFzMTh0cDJvcXVtdGY1MDIwNiJ9.2sGafjOIjrivBF6NTS8M2Q';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pmartisa/cl4vbow2y002d15q9i2k73wav',
    zoom: 5,
    maxZoom: 6,
    minZoom: 4, 
    center: [-120.15, 39.37],   
      projection: 'mercator',
    });


    map.on("load", function () {
      map.addLayer({
        id: "us_states_outline",
        type: "line",
        source: {
          type: "geojson",
          data: "data/statesOutline.geojson",
        },
        paint: {
          "line-color": "#000000",
          "line-width": 0.2,
        },
       }, "waterway-label"
      );

      map.addLayer(
          {
          id: "fires-US",
          type: "fill",
          source: {
              type: "geojson",
              data: "data/fireHazardData.geojson",
          },
           paint: {    
              "fill-color": [
              "match",
              ["get", "naturalBreaks"],
              "0 - 196",
              "#fef0d9",
              "196 - 714",
              "#fdcc8a",
              "714 - 1768",
              "#fc8d59",
              "1768 - 4698",
              "#e34a33",
              "4698 - 8061",
              "#b30000",    
              "#fff7fb",
              ],
      }
           },
           "us_states_outline"
      );
  
  
      // Create the popup
  map.on('click', 'fires-US', function (e) {
      var State = e.features[0].properties.STATE.toUpperCase();
      var County = e.features[0].properties.NAMELSAD;
      var Hazard = e.features[0].properties['Mean WHP-Direct'].toLocaleString("nu", {maximumFractionDigits: 0});
      var Houses = e.features[0].properties['Total number of Housing Units (HUs)'].toLocaleString("nu", {maximumFractionDigits: 0});
      var prtDirect = e.features[0].properties['Fraction of Total HUs  Directly Exposed'].toFixed(2);
      new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML('<h4>' + State + '</h4>'
            +'<h2>' + County + '</h2>'
            + '<p>' + Hazard + ' ' + 'average hazard risk'+ '</p>'
            + '<p>'+ prtDirect + '%' + ' ' + 'of' + ' ' + Houses + ' ' + 'houses' + '</p>')
        .addTo(map);
      });
      // Change the cursor to a pointer when the mouse is over the fires-US layer.
      map.on('mouseenter', 'fires-US', function () {
      map.getCanvas().style.cursor = 'pointer';
      });
      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'fires-US', function () {
      map.getCanvas().style.cursor = '';
      });
  });