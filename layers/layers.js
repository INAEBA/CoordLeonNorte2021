var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionLeonNorte_3 = new ol.format.GeoJSON();
var features_CoordinacionLeonNorte_3 = format_CoordinacionLeonNorte_3.readFeatures(json_CoordinacionLeonNorte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionLeonNorte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionLeonNorte_3.addFeatures(features_CoordinacionLeonNorte_3);
var lyr_CoordinacionLeonNorte_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionLeonNorte_3, 
                style: style_CoordinacionLeonNorte_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionLeonNorte_3.png" /> Coordinacion Leon Norte'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionLE33_5 = new ol.format.GeoJSON();
var features_MicroregionLE33_5 = format_MicroregionLE33_5.readFeatures(json_MicroregionLE33_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE33_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE33_5.addFeatures(features_MicroregionLE33_5);
var lyr_MicroregionLE33_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE33_5, 
                style: style_MicroregionLE33_5,
                interactive: false,
    title: 'Microregion LE33<br />\
    <img src="styles/legend/MicroregionLE33_5_0.png" /> 3 - 19 Personas <br />\
    <img src="styles/legend/MicroregionLE33_5_1.png" /> 19 - 36 Personas <br />\
    <img src="styles/legend/MicroregionLE33_5_2.png" /> 36 - 59 Personas <br />\
    <img src="styles/legend/MicroregionLE33_5_3.png" /> 59 - 127 Personas <br />\
    <img src="styles/legend/MicroregionLE33_5_4.png" /> 127 - 224 Personas <br />'
        });
var format_MicroregionLE2827_6 = new ol.format.GeoJSON();
var features_MicroregionLE2827_6 = format_MicroregionLE2827_6.readFeatures(json_MicroregionLE2827_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE2827_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE2827_6.addFeatures(features_MicroregionLE2827_6);
var lyr_MicroregionLE2827_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE2827_6, 
                style: style_MicroregionLE2827_6,
                interactive: false,
    title: 'Microregion LE28-27<br />\
    <img src="styles/legend/MicroregionLE2827_6_0.png" /> 3 - 17 Personas<br />\
    <img src="styles/legend/MicroregionLE2827_6_1.png" /> 17 - 40 Personas<br />\
    <img src="styles/legend/MicroregionLE2827_6_2.png" /> 40 - 72 Personas<br />\
    <img src="styles/legend/MicroregionLE2827_6_3.png" /> 72 - 122 Personas<br />\
    <img src="styles/legend/MicroregionLE2827_6_4.png" /> 122 - 250 Personas<br />'
        });
var format_MicroregionLE20_7 = new ol.format.GeoJSON();
var features_MicroregionLE20_7 = format_MicroregionLE20_7.readFeatures(json_MicroregionLE20_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE20_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE20_7.addFeatures(features_MicroregionLE20_7);
var lyr_MicroregionLE20_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE20_7, 
                style: style_MicroregionLE20_7,
                interactive: false,
    title: 'Microregion LE20<br />\
    <img src="styles/legend/MicroregionLE20_7_0.png" /> 1 - 14 Personas<br />\
    <img src="styles/legend/MicroregionLE20_7_1.png" /> 14 - 28 Personas<br />\
    <img src="styles/legend/MicroregionLE20_7_2.png" /> 28 - 46 Personas<br />\
    <img src="styles/legend/MicroregionLE20_7_3.png" /> 46 - 77 Personas<br />\
    <img src="styles/legend/MicroregionLE20_7_4.png" /> 77 - 135 Personas<br />'
        });
var format_MicroregionLE19_8 = new ol.format.GeoJSON();
var features_MicroregionLE19_8 = format_MicroregionLE19_8.readFeatures(json_MicroregionLE19_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE19_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE19_8.addFeatures(features_MicroregionLE19_8);
var lyr_MicroregionLE19_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE19_8, 
                style: style_MicroregionLE19_8,
                interactive: false,
    title: 'Microregion LE19<br />\
    <img src="styles/legend/MicroregionLE19_8_0.png" /> 3 - 15 Personas <br />\
    <img src="styles/legend/MicroregionLE19_8_1.png" /> 15 - 33 Personas <br />\
    <img src="styles/legend/MicroregionLE19_8_2.png" /> 33 - 57 Personas <br />\
    <img src="styles/legend/MicroregionLE19_8_3.png" /> 57 - 92 Personas <br />\
    <img src="styles/legend/MicroregionLE19_8_4.png" /> 92 - 163 Personas <br />'
        });
var format_MicroregionLE151N_9 = new ol.format.GeoJSON();
var features_MicroregionLE151N_9 = format_MicroregionLE151N_9.readFeatures(json_MicroregionLE151N_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE151N_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE151N_9.addFeatures(features_MicroregionLE151N_9);
var lyr_MicroregionLE151N_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE151N_9, 
                style: style_MicroregionLE151N_9,
                interactive: false,
    title: 'Microregion LE15-1N<br />\
    <img src="styles/legend/MicroregionLE151N_9_0.png" /> 3 - 14 Personas<br />\
    <img src="styles/legend/MicroregionLE151N_9_1.png" /> 14 - 33 Personas<br />\
    <img src="styles/legend/MicroregionLE151N_9_2.png" /> 33 - 124 Personas<br />\
    <img src="styles/legend/MicroregionLE151N_9_3.png" /> 124 - 258 Personas<br />\
    <img src="styles/legend/MicroregionLE151N_9_4.png" /> 258 - 582 Personas<br />'
        });
var format_MicroregionLE14_10 = new ol.format.GeoJSON();
var features_MicroregionLE14_10 = format_MicroregionLE14_10.readFeatures(json_MicroregionLE14_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE14_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE14_10.addFeatures(features_MicroregionLE14_10);
var lyr_MicroregionLE14_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE14_10, 
                style: style_MicroregionLE14_10,
                interactive: false,
    title: 'Microregion LE14<br />\
    <img src="styles/legend/MicroregionLE14_10_0.png" /> 3 - 16 Personas<br />\
    <img src="styles/legend/MicroregionLE14_10_1.png" /> 16 - 33 Personas<br />\
    <img src="styles/legend/MicroregionLE14_10_2.png" /> 33 - 62 Personas<br />\
    <img src="styles/legend/MicroregionLE14_10_3.png" /> 62 - 162 Personas<br />\
    <img src="styles/legend/MicroregionLE14_10_4.png" /> 162 - 296 Personas<br />'
        });
var format_MicroregionLE13_11 = new ol.format.GeoJSON();
var features_MicroregionLE13_11 = format_MicroregionLE13_11.readFeatures(json_MicroregionLE13_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE13_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE13_11.addFeatures(features_MicroregionLE13_11);
var lyr_MicroregionLE13_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE13_11, 
                style: style_MicroregionLE13_11,
                interactive: false,
    title: 'Microregion LE13<br />\
    <img src="styles/legend/MicroregionLE13_11_0.png" /> 3 - 29 Personas<br />\
    <img src="styles/legend/MicroregionLE13_11_1.png" /> 29 - 80 Personas<br />\
    <img src="styles/legend/MicroregionLE13_11_2.png" /> 80 - 182 Personas<br />\
    <img src="styles/legend/MicroregionLE13_11_3.png" /> 182 - 429 Personas<br />\
    <img src="styles/legend/MicroregionLE13_11_4.png" /> 429 - 719 Personas<br />'
        });
var format_MicroregionLE12_12 = new ol.format.GeoJSON();
var features_MicroregionLE12_12 = format_MicroregionLE12_12.readFeatures(json_MicroregionLE12_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE12_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE12_12.addFeatures(features_MicroregionLE12_12);
var lyr_MicroregionLE12_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE12_12, 
                style: style_MicroregionLE12_12,
                interactive: false,
    title: 'Microregion LE12<br />\
    <img src="styles/legend/MicroregionLE12_12_0.png" /> 3 - 12 Personas<br />\
    <img src="styles/legend/MicroregionLE12_12_1.png" /> 12 - 23 Personas<br />\
    <img src="styles/legend/MicroregionLE12_12_2.png" /> 23 - 38 Personas<br />\
    <img src="styles/legend/MicroregionLE12_12_3.png" /> 38 - 92 Personas<br />\
    <img src="styles/legend/MicroregionLE12_12_4.png" /> 92 - 201 Personas<br />'
        });
var format_MicroregionLE11_13 = new ol.format.GeoJSON();
var features_MicroregionLE11_13 = format_MicroregionLE11_13.readFeatures(json_MicroregionLE11_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE11_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE11_13.addFeatures(features_MicroregionLE11_13);
var lyr_MicroregionLE11_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE11_13, 
                style: style_MicroregionLE11_13,
                interactive: false,
    title: 'Microregion LE11<br />\
    <img src="styles/legend/MicroregionLE11_13_0.png" /> 3 - 18 Personas <br />\
    <img src="styles/legend/MicroregionLE11_13_1.png" /> 18 - 37 Personas <br />\
    <img src="styles/legend/MicroregionLE11_13_2.png" /> 37 - 69 Personas <br />\
    <img src="styles/legend/MicroregionLE11_13_3.png" /> 69 - 134 Personas <br />\
    <img src="styles/legend/MicroregionLE11_13_4.png" /> 134 - 723 Personas <br />'
        });
var format_MicroregionLE10_14 = new ol.format.GeoJSON();
var features_MicroregionLE10_14 = format_MicroregionLE10_14.readFeatures(json_MicroregionLE10_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE10_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE10_14.addFeatures(features_MicroregionLE10_14);
var lyr_MicroregionLE10_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE10_14, 
                style: style_MicroregionLE10_14,
                interactive: false,
    title: 'Microregion LE10<br />\
    <img src="styles/legend/MicroregionLE10_14_0.png" /> 1 - 23 Personas<br />\
    <img src="styles/legend/MicroregionLE10_14_1.png" /> 23 - 55 Personas<br />\
    <img src="styles/legend/MicroregionLE10_14_2.png" /> 55 - 125 Personas<br />\
    <img src="styles/legend/MicroregionLE10_14_3.png" /> 125 - 411 Personas<br />\
    <img src="styles/legend/MicroregionLE10_14_4.png" /> 411 - 582 Personas<br />'
        });
var format_MicroregonLE09_15 = new ol.format.GeoJSON();
var features_MicroregonLE09_15 = format_MicroregonLE09_15.readFeatures(json_MicroregonLE09_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregonLE09_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregonLE09_15.addFeatures(features_MicroregonLE09_15);
var lyr_MicroregonLE09_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregonLE09_15, 
                style: style_MicroregonLE09_15,
                interactive: false,
    title: 'Microregon LE09<br />\
    <img src="styles/legend/MicroregonLE09_15_0.png" /> 3 - 21 Personas<br />\
    <img src="styles/legend/MicroregonLE09_15_1.png" /> 21 - 53 Personas<br />\
    <img src="styles/legend/MicroregonLE09_15_2.png" /> 53 - 108 Personas<br />\
    <img src="styles/legend/MicroregonLE09_15_3.png" /> 108 - 184 Personas<br />\
    <img src="styles/legend/MicroregonLE09_15_4.png" /> 184 - 280 Personas<br />'
        });
var format_MicroregionLE0805_16 = new ol.format.GeoJSON();
var features_MicroregionLE0805_16 = format_MicroregionLE0805_16.readFeatures(json_MicroregionLE0805_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE0805_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE0805_16.addFeatures(features_MicroregionLE0805_16);
var lyr_MicroregionLE0805_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE0805_16, 
                style: style_MicroregionLE0805_16,
                interactive: false,
    title: 'Microregion LE08-05<br />\
    <img src="styles/legend/MicroregionLE0805_16_0.png" /> 3 - 12 Personas<br />\
    <img src="styles/legend/MicroregionLE0805_16_1.png" /> 12 - 25 Personas<br />\
    <img src="styles/legend/MicroregionLE0805_16_2.png" /> 25 - 43 Personas<br />\
    <img src="styles/legend/MicroregionLE0805_16_3.png" /> 43 - 88 Personas<br />\
    <img src="styles/legend/MicroregionLE0805_16_4.png" /> 88 - 153 Personas<br />'
        });
var format_MicroregionLE0705_17 = new ol.format.GeoJSON();
var features_MicroregionLE0705_17 = format_MicroregionLE0705_17.readFeatures(json_MicroregionLE0705_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE0705_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE0705_17.addFeatures(features_MicroregionLE0705_17);
var lyr_MicroregionLE0705_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE0705_17, 
                style: style_MicroregionLE0705_17,
                interactive: false,
    title: 'Microregion LE07-05<br />\
    <img src="styles/legend/MicroregionLE0705_17_0.png" /> 3 - 23 Personas<br />\
    <img src="styles/legend/MicroregionLE0705_17_1.png" /> 23 - 43 Personas<br />\
    <img src="styles/legend/MicroregionLE0705_17_2.png" /> 43 - 72 Personas<br />\
    <img src="styles/legend/MicroregionLE0705_17_3.png" /> 72 - 122 Personas<br />\
    <img src="styles/legend/MicroregionLE0705_17_4.png" /> 122 - 166 Personas<br />'
        });
var format_MicroregionLE06_18 = new ol.format.GeoJSON();
var features_MicroregionLE06_18 = format_MicroregionLE06_18.readFeatures(json_MicroregionLE06_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE06_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE06_18.addFeatures(features_MicroregionLE06_18);
var lyr_MicroregionLE06_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE06_18, 
                style: style_MicroregionLE06_18,
                interactive: false,
    title: 'Microregion LE06<br />\
    <img src="styles/legend/MicroregionLE06_18_0.png" /> 3 - 14 Personas <br />\
    <img src="styles/legend/MicroregionLE06_18_1.png" /> 14 - 32 Personas <br />\
    <img src="styles/legend/MicroregionLE06_18_2.png" /> 32 - 67 Personas <br />\
    <img src="styles/legend/MicroregionLE06_18_3.png" /> 67 - 218 Personas <br />\
    <img src="styles/legend/MicroregionLE06_18_4.png" /> 218 - 420 Personas <br />'
        });
var format_MicroregionLE0405_19 = new ol.format.GeoJSON();
var features_MicroregionLE0405_19 = format_MicroregionLE0405_19.readFeatures(json_MicroregionLE0405_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE0405_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE0405_19.addFeatures(features_MicroregionLE0405_19);
var lyr_MicroregionLE0405_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE0405_19, 
                style: style_MicroregionLE0405_19,
                interactive: false,
    title: 'Microregion LE04-05<br />\
    <img src="styles/legend/MicroregionLE0405_19_0.png" /> 3 - 16 Personas<br />\
    <img src="styles/legend/MicroregionLE0405_19_1.png" /> 16 - 31 Personas<br />\
    <img src="styles/legend/MicroregionLE0405_19_2.png" /> 31 - 51 Personas<br />\
    <img src="styles/legend/MicroregionLE0405_19_3.png" /> 51 - 81 Personas<br />\
    <img src="styles/legend/MicroregionLE0405_19_4.png" /> 81 - 131 Personas<br />'
        });
var format_MicroregionLE03_20 = new ol.format.GeoJSON();
var features_MicroregionLE03_20 = format_MicroregionLE03_20.readFeatures(json_MicroregionLE03_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE03_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE03_20.addFeatures(features_MicroregionLE03_20);
var lyr_MicroregionLE03_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE03_20, 
                style: style_MicroregionLE03_20,
                interactive: false,
    title: 'Microregion LE03<br />\
    <img src="styles/legend/MicroregionLE03_20_0.png" /> 3 - 13 Personas<br />\
    <img src="styles/legend/MicroregionLE03_20_1.png" /> 13 - 28 Personas<br />\
    <img src="styles/legend/MicroregionLE03_20_2.png" /> 28 - 47 Personas<br />\
    <img src="styles/legend/MicroregionLE03_20_3.png" /> 47 - 95 Personas<br />\
    <img src="styles/legend/MicroregionLE03_20_4.png" /> 95 - 197 Personas<br />'
        });
var format_MicroregionLE0218_21 = new ol.format.GeoJSON();
var features_MicroregionLE0218_21 = format_MicroregionLE0218_21.readFeatures(json_MicroregionLE0218_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE0218_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE0218_21.addFeatures(features_MicroregionLE0218_21);
var lyr_MicroregionLE0218_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE0218_21, 
                style: style_MicroregionLE0218_21,
                interactive: false,
    title: 'Microregion LE02-18<br />\
    <img src="styles/legend/MicroregionLE0218_21_0.png" /> 3 - 13 Personas <br />\
    <img src="styles/legend/MicroregionLE0218_21_1.png" /> 13 - 29 Personas <br />\
    <img src="styles/legend/MicroregionLE0218_21_2.png" /> 29 - 50 Personas <br />\
    <img src="styles/legend/MicroregionLE0218_21_3.png" /> 50 - 93 Personas <br />\
    <img src="styles/legend/MicroregionLE0218_21_4.png" /> 93 - 165 Personas <br />'
        });
var format_MicroregionLE0118_22 = new ol.format.GeoJSON();
var features_MicroregionLE0118_22 = format_MicroregionLE0118_22.readFeatures(json_MicroregionLE0118_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionLE0118_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionLE0118_22.addFeatures(features_MicroregionLE0118_22);
var lyr_MicroregionLE0118_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionLE0118_22, 
                style: style_MicroregionLE0118_22,
                interactive: false,
    title: 'Microregion LE01-18<br />\
    <img src="styles/legend/MicroregionLE0118_22_0.png" /> 3 - 13 Personas<br />\
    <img src="styles/legend/MicroregionLE0118_22_1.png" /> 13 - 30 Personas<br />\
    <img src="styles/legend/MicroregionLE0118_22_2.png" /> 30 - 57 Personas<br />\
    <img src="styles/legend/MicroregionLE0118_22_3.png" /> 57 - 147 Personas<br />\
    <img src="styles/legend/MicroregionLE0118_22_4.png" /> 147 - 255 Personas<br />'
        });
var format_CoordinacionLeonNorte_23 = new ol.format.GeoJSON();
var features_CoordinacionLeonNorte_23 = format_CoordinacionLeonNorte_23.readFeatures(json_CoordinacionLeonNorte_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionLeonNorte_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionLeonNorte_23.addFeatures(features_CoordinacionLeonNorte_23);
var lyr_CoordinacionLeonNorte_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionLeonNorte_23, 
                style: style_CoordinacionLeonNorte_23,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionLeonNorte_23.png" /> Coordinacion Leon Norte'
            });
var group_CoordinacionLeonNorteRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionLE33_5,lyr_MicroregionLE2827_6,lyr_MicroregionLE20_7,lyr_MicroregionLE19_8,lyr_MicroregionLE151N_9,lyr_MicroregionLE14_10,lyr_MicroregionLE13_11,lyr_MicroregionLE12_12,lyr_MicroregionLE11_13,lyr_MicroregionLE10_14,lyr_MicroregonLE09_15,lyr_MicroregionLE0805_16,lyr_MicroregionLE0705_17,lyr_MicroregionLE06_18,lyr_MicroregionLE0405_19,lyr_MicroregionLE03_20,lyr_MicroregionLE0218_21,lyr_MicroregionLE0118_22,],
                                title: "Coordinacion Leon Norte Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionLeonNorte_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionLeonNorte_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionLE33_5.setVisible(true);lyr_MicroregionLE2827_6.setVisible(true);lyr_MicroregionLE20_7.setVisible(true);lyr_MicroregionLE19_8.setVisible(true);lyr_MicroregionLE151N_9.setVisible(true);lyr_MicroregionLE14_10.setVisible(true);lyr_MicroregionLE13_11.setVisible(true);lyr_MicroregionLE12_12.setVisible(true);lyr_MicroregionLE11_13.setVisible(true);lyr_MicroregionLE10_14.setVisible(true);lyr_MicroregonLE09_15.setVisible(true);lyr_MicroregionLE0805_16.setVisible(true);lyr_MicroregionLE0705_17.setVisible(true);lyr_MicroregionLE06_18.setVisible(true);lyr_MicroregionLE0405_19.setVisible(true);lyr_MicroregionLE03_20.setVisible(true);lyr_MicroregionLE0218_21.setVisible(true);lyr_MicroregionLE0118_22.setVisible(true);lyr_CoordinacionLeonNorte_23.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionLeonNorteRezago,lyr_CoordinacionLeonNorte_23];
lyr_CoordinacionLeonNorte_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionLE33_5.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE2827_6.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE20_7.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE19_8.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE151N_9.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionLE14_10.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionLE13_11.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionLE12_12.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionLE11_13.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionLE10_14.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_MicroregonLE09_15.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE0805_16.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE0705_17.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE06_18.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionLE0405_19.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE03_20.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE0218_21.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_MicroregionLE0118_22.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'micro': 'micro', });
lyr_CoordinacionLeonNorte_23.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionLeonNorte_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionLE33_5.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE2827_6.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE20_7.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE19_8.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE151N_9.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionLE14_10.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionLE13_11.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionLE12_12.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionLE11_13.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionLE10_14.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregonLE09_15.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE0805_16.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE0705_17.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE06_18.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionLE0405_19.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE03_20.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE0218_21.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_MicroregionLE0118_22.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'micro': 'TextEdit', });
lyr_CoordinacionLeonNorte_23.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionLeonNorte_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionLE33_5.set('fieldLabels', {});
lyr_MicroregionLE2827_6.set('fieldLabels', {});
lyr_MicroregionLE20_7.set('fieldLabels', {});
lyr_MicroregionLE19_8.set('fieldLabels', {});
lyr_MicroregionLE151N_9.set('fieldLabels', {});
lyr_MicroregionLE14_10.set('fieldLabels', {});
lyr_MicroregionLE13_11.set('fieldLabels', {});
lyr_MicroregionLE12_12.set('fieldLabels', {});
lyr_MicroregionLE11_13.set('fieldLabels', {});
lyr_MicroregionLE10_14.set('fieldLabels', {});
lyr_MicroregonLE09_15.set('fieldLabels', {});
lyr_MicroregionLE0805_16.set('fieldLabels', {});
lyr_MicroregionLE0705_17.set('fieldLabels', {});
lyr_MicroregionLE06_18.set('fieldLabels', {});
lyr_MicroregionLE0405_19.set('fieldLabels', {});
lyr_MicroregionLE03_20.set('fieldLabels', {});
lyr_MicroregionLE0218_21.set('fieldLabels', {});
lyr_MicroregionLE0118_22.set('fieldLabels', {});
lyr_CoordinacionLeonNorte_23.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionLeonNorte_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});