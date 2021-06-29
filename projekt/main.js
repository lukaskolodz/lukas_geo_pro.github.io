var mymap = L.map("map").setView([52, 19], 10);

mymap.locate({ setView: true, maZoom: 12 });

var lyrOSM = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");

lyrOpentopo = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png'),

lyrGoogleHyb = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'),

lyrGoogleR = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'),

mymap.addLayer(lyrOSM);

var baseMaps = {
    "Openstreetmap": lyrOSM,
    "Google Road":lyrGoogleR,
    "OpenTopoMap":lyrOpentopo,
    "Google Satelita":lyrGoogleHyb,
  };

lyrWoj = L.tileLayer.wms("http://localhost:8080/geoserver/prge/wms", 
            {
            layers: "prge:Wojewodztwa", 
            format: 'image/png', 
            transparent : 'true', 
            version : '1.1.1'
            });


lyrDr = L.tileLayer.wms("http://localhost:8080/geoserver/prge/wms", 
            {
            layers: "prge:drogi", 
            format: 'image/png', 
            transparent : 'true', 
            version : '1.1.1'
            });

lyrBud = L.tileLayer.wms("http://localhost:8080/geoserver/prge/wms", 
            {
            layers: "prge:budynki", 
            format: 'image/png', 
            transparent : 'true', 
            version : '1.1.1'
            });

    var overlays = {
                "Wojwództwa": lyrWoj,
                "Wybrane drogi": lyrDr,
                "Wybrane miejscowości": lyrBud
              };

L.control.layers(baseMaps, overlays).addTo(mymap);


