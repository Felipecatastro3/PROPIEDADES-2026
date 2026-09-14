var wms_layers = [];

var format_copiaparavisor_0 = new ol.format.GeoJSON();
var features_copiaparavisor_0 = format_copiaparavisor_0.readFeatures(json_copiaparavisor_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_copiaparavisor_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_copiaparavisor_0.addFeatures(features_copiaparavisor_0);
var lyr_copiaparavisor_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_copiaparavisor_0, 
                style: style_copiaparavisor_0,
                popuplayertitle: 'copia para visor',
                interactive: true,
                title: '<img src="styles/legend/copiaparavisor_0.png" /> copia para visor'
            });

lyr_copiaparavisor_0.setVisible(true);
var layersList = [lyr_copiaparavisor_0];
lyr_copiaparavisor_0.set('fieldAliases', {'ROL': 'ROL', });
lyr_copiaparavisor_0.set('fieldImages', {'ROL': 'TextEdit', });
lyr_copiaparavisor_0.set('fieldLabels', {'ROL': 'inline label - always visible', });
lyr_copiaparavisor_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});