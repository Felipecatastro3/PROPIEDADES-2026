var wms_layers = [];

// 1. Capas Base
var lyr_osm = new ol.layer.Tile({
    'title': 'OpenStreetMap',
    'type': 'base',
    'opacity': 1.000000,
    source: new ol.source.OSM()
});

var lyr_google_sat = new ol.layer.Tile({
    'title': 'Google Satélite',
    'type': 'base',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});

// 2. Estilo: Solo contorno (Sin relleno)
var customOutlineStyle = new ol.style.Style({
    fill: null, // Elimina el relleno por completo
    stroke: new ol.style.Stroke({
        color: '#2b8cbe', // Color celeste/azul para el borde
        width: 1.8        // Grosor del borde
    })
});

// 3. Procesamiento Vectorial
var format_copiaparavisor_0 = new ol.format.GeoJSON();
var features_copiaparavisor_0 = format_copiaparavisor_0.readFeatures(json_copiaparavisor_0, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_copiaparavisor_0 = new ol.source.Vector({ atts: '' });
jsonSource_copiaparavisor_0.addFeatures(features_copiaparavisor_0);

var lyr_copiaparavisor_0 = new ol.layer.Vector({
    opacity: 1,
    source: jsonSource_copiaparavisor_0,
    style: customOutlineStyle,
    renderMode: 'image', // Mantiene la aceleración del mapa al mover/hacer zoom
    popuplayertitle: 'copiaparavisor',
    interactive: true,
    title: 'Predios'
});

lyr_copiaparavisor_0.setVisible(true);

// 4. Lista final de capas
var layersList = [lyr_osm, lyr_google_sat, lyr_copiaparavisor_0];

lyr_copiaparavisor_0.set('fieldAliases', {});
lyr_copiaparavisor_0.set('fieldImages', {});
lyr_copiaparavisor_0.set('fieldLabels', {});
