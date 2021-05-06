$(document).ready(function () {
    var mymap = L.map('mymap', 
    {center: [52.1, 21.0], zoom: 10, zoomControl: true, attributionControl: false});
            
    var lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');

        lyrOpentopo = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png'),

        lyrGoogleHyb = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'),

        lyrGoogleSat = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'),

        lyrGoogleR = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'),

        lyrPRG = L.tileLayer.wms("http://localhost:8080/geoserver/prge/wms", 
            {
            layers: "prge:Gminy", 
            format: 'image/png', 
            transparent : 'true', 
            version : '1.1.1'
            });

          lyrTopo = L.tileLayer.wms(
            "https://mapy.geoportal.gov.pl/wss/service/img/guest/TOPO/MapServer/WMSServer",
            {
              layers: "Raster",
              format: "image/png",
              transparent: "true",
              version: "1.1.1",
            }
          ),

        lyrSozo = L.tileLayer.wms("http://mapy.geoportal.gov.pl/wss/service/img/guest/SOZO/MapServer/WMSServer",
          {
         layers: "Raster", 
         format: 'image/png',
          transparent : 'true', 
         version : '1.1.1'
         }),
         
    mymap.addLayer(lyrOSM);

    var baseMaps = {
        "Openstreetmap": lyrOSM,
        "Mapa Topograficzna": lyrTopo,
        "Mapa Sozologiczna": lyrSozo,
        "OpenTopoMap":lyrOpentopo,
        "Google Hybrid":lyrGoogleHyb,
        "Google Satellite":lyrGoogleSat,
        "Google Road":lyrGoogleR,
      };
     
      var overlays = {
        "Gminy": lyrPRG,
      };
    //polecenie dodania ikonki do wyboru danych
    L.control.layers(baseMaps, overlays).addTo(mymap);

    //dodaje skale
    L.control
    .scale({ position: "bottomright", imperial: true, maxWidth: 200 })
    .addTo(mymap);






        });

        