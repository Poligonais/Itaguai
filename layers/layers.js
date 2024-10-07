var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoIIPolgonoTerrestre_1 = new ol.format.GeoJSON();
var features_AnexoIIPolgonoTerrestre_1 = format_AnexoIIPolgonoTerrestre_1.readFeatures(json_AnexoIIPolgonoTerrestre_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIPolgonoTerrestre_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIPolgonoTerrestre_1.addFeatures(features_AnexoIIPolgonoTerrestre_1);
var lyr_AnexoIIPolgonoTerrestre_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIPolgonoTerrestre_1, 
                style: style_AnexoIIPolgonoTerrestre_1,
                popuplayertitle: "Anexo II - Polígono Terrestre",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIPolgonoTerrestre_1.png" /> Anexo II - Polígono Terrestre'
            });
var format_AnexoIPolgonoMartimoeTerrestre_2 = new ol.format.GeoJSON();
var features_AnexoIPolgonoMartimoeTerrestre_2 = format_AnexoIPolgonoMartimoeTerrestre_2.readFeatures(json_AnexoIPolgonoMartimoeTerrestre_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIPolgonoMartimoeTerrestre_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIPolgonoMartimoeTerrestre_2.addFeatures(features_AnexoIPolgonoMartimoeTerrestre_2);
var lyr_AnexoIPolgonoMartimoeTerrestre_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIPolgonoMartimoeTerrestre_2, 
                style: style_AnexoIPolgonoMartimoeTerrestre_2,
                popuplayertitle: "Anexo I - Polígono Marítimo e Terrestre",
                interactive: true,
                title: '<img src="styles/legend/AnexoIPolgonoMartimoeTerrestre_2.png" /> Anexo I - Polígono Marítimo e Terrestre'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoIIPolgonoTerrestre_1.setVisible(true);lyr_AnexoIPolgonoMartimoeTerrestre_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoIIPolgonoTerrestre_1,lyr_AnexoIPolgonoMartimoeTerrestre_2];
lyr_AnexoIIPolgonoTerrestre_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIPolgonoMartimoeTerrestre_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIPolgonoTerrestre_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIPolgonoMartimoeTerrestre_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIPolgonoTerrestre_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoMartimoeTerrestre_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIPolgonoMartimoeTerrestre_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});