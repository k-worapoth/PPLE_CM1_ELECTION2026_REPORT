var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_tambon_CMMC_1 = new ol.format.GeoJSON();
var features_tambon_CMMC_1 = format_tambon_CMMC_1.readFeatures(json_tambon_CMMC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambon_CMMC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambon_CMMC_1.addFeatures(features_tambon_CMMC_1);
var lyr_tambon_CMMC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambon_CMMC_1, 
                style: style_tambon_CMMC_1,
                popuplayertitle: 'tambon_CMMC',
                interactive: true,
                title: '<img src="styles/legend/tambon_CMMC_1.png" /> tambon_CMMC'
            });
var format_moo_faham_2 = new ol.format.GeoJSON();
var features_moo_faham_2 = format_moo_faham_2.readFeatures(json_moo_faham_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_faham_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_faham_2.addFeatures(features_moo_faham_2);
var lyr_moo_faham_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_faham_2, 
                style: style_moo_faham_2,
                popuplayertitle: 'moo_faham',
                interactive: true,
                title: '<img src="styles/legend/moo_faham_2.png" /> moo_faham'
            });
var format_moo_tambon_changpueak_3 = new ol.format.GeoJSON();
var features_moo_tambon_changpueak_3 = format_moo_tambon_changpueak_3.readFeatures(json_moo_tambon_changpueak_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_tambon_changpueak_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_tambon_changpueak_3.addFeatures(features_moo_tambon_changpueak_3);
var lyr_moo_tambon_changpueak_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_tambon_changpueak_3, 
                style: style_moo_tambon_changpueak_3,
                popuplayertitle: 'moo_tambon_changpueak',
                interactive: true,
                title: '<img src="styles/legend/moo_tambon_changpueak_3.png" /> moo_tambon_changpueak'
            });
var format_moo_suthep_4 = new ol.format.GeoJSON();
var features_moo_suthep_4 = format_moo_suthep_4.readFeatures(json_moo_suthep_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_suthep_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_suthep_4.addFeatures(features_moo_suthep_4);
var lyr_moo_suthep_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_suthep_4, 
                style: style_moo_suthep_4,
                popuplayertitle: 'moo_suthep',
                interactive: true,
                title: '<img src="styles/legend/moo_suthep_4.png" /> moo_suthep'
            });
var format_moo_sanpheseau_5 = new ol.format.GeoJSON();
var features_moo_sanpheseau_5 = format_moo_sanpheseau_5.readFeatures(json_moo_sanpheseau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_sanpheseau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_sanpheseau_5.addFeatures(features_moo_sanpheseau_5);
var lyr_moo_sanpheseau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_sanpheseau_5, 
                style: style_moo_sanpheseau_5,
                popuplayertitle: 'moo_sanpheseau',
                interactive: true,
                title: '<img src="styles/legend/moo_sanpheseau_5.png" /> moo_sanpheseau'
            });
var format_moo_padet_6 = new ol.format.GeoJSON();
var features_moo_padet_6 = format_moo_padet_6.readFeatures(json_moo_padet_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_padet_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_padet_6.addFeatures(features_moo_padet_6);
var lyr_moo_padet_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_padet_6, 
                style: style_moo_padet_6,
                popuplayertitle: 'moo_padet',
                interactive: true,
                title: '<img src="styles/legend/moo_padet_6.png" /> moo_padet'
            });
var format_moo_maehia_7 = new ol.format.GeoJSON();
var features_moo_maehia_7 = format_moo_maehia_7.readFeatures(json_moo_maehia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_maehia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_maehia_7.addFeatures(features_moo_maehia_7);
var lyr_moo_maehia_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_maehia_7, 
                style: style_moo_maehia_7,
                popuplayertitle: 'moo_maehia',
                interactive: true,
                title: '<img src="styles/legend/moo_maehia_7.png" /> moo_maehia'
            });
var format_electionmap_template2026_8 = new ol.format.GeoJSON();
var features_electionmap_template2026_8 = format_electionmap_template2026_8.readFeatures(json_electionmap_template2026_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_electionmap_template2026_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_electionmap_template2026_8.addFeatures(features_electionmap_template2026_8);
var lyr_electionmap_template2026_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_electionmap_template2026_8, 
                style: style_electionmap_template2026_8,
                popuplayertitle: 'electionmap_template2026',
                interactive: false,
    title: 'electionmap_template2026<br />\
    <img src="styles/legend/electionmap_template2026_8_0.png" /> <br />\
    <img src="styles/legend/electionmap_template2026_8_1.png" /> 1<br />\
    <img src="styles/legend/electionmap_template2026_8_2.png" /> 2<br />\
    <img src="styles/legend/electionmap_template2026_8_3.png" /> <br />' });
var format_electionscore_data_2026_9 = new ol.format.GeoJSON();
var features_electionscore_data_2026_9 = format_electionscore_data_2026_9.readFeatures(json_electionscore_data_2026_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_electionscore_data_2026_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_electionscore_data_2026_9.addFeatures(features_electionscore_data_2026_9);
var lyr_electionscore_data_2026_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_electionscore_data_2026_9, 
                style: style_electionscore_data_2026_9,
                popuplayertitle: 'electionscore_data_2026',
                interactive: true,
    title: 'electionscore_data_2026<br />\
    <img src="styles/legend/electionscore_data_2026_9_0.png" /> 2_PPLE<br />\
    <img src="styles/legend/electionscore_data_2026_9_1.png" /> 6_PT<br />\
    <img src="styles/legend/electionscore_data_2026_9_2.png" /> <br />' });
var group_electionresultMP2026 = new ol.layer.Group({
                                layers: [lyr_electionmap_template2026_8,lyr_electionscore_data_2026_9,],
                                fold: 'open',
                                title: 'electionresultMP2026'});
var group_polictcalmap_forcollectingscore = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'polictcalmap_forcollectingscore'});
var group_EVENT = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'EVENT'});
var group_ELECTIONRESULT = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'ELECTIONRESULT'});
var group_CMMC2025 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CMMC2025'});
var group_banner2025 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'banner2025'});
var group_banner2026 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'banner2026'});
var group_POLITICALMAP = new ol.layer.Group({
                                layers: [lyr_tambon_CMMC_1,lyr_moo_faham_2,lyr_moo_tambon_changpueak_3,lyr_moo_suthep_4,lyr_moo_sanpheseau_5,lyr_moo_padet_6,lyr_moo_maehia_7,],
                                fold: 'open',
                                title: 'POLITICALMAP'});
var group_MP_CM1_2023 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MP_CM1_2023'});

lyr_EsriTopographic_0.setVisible(true);lyr_tambon_CMMC_1.setVisible(true);lyr_moo_faham_2.setVisible(true);lyr_moo_tambon_changpueak_3.setVisible(true);lyr_moo_suthep_4.setVisible(true);lyr_moo_sanpheseau_5.setVisible(true);lyr_moo_padet_6.setVisible(true);lyr_moo_maehia_7.setVisible(true);lyr_electionmap_template2026_8.setVisible(true);lyr_electionscore_data_2026_9.setVisible(true);
var layersList = [lyr_EsriTopographic_0,group_POLITICALMAP,group_electionresultMP2026];
lyr_tambon_CMMC_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_faham_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_tambon_changpueak_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_suthep_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_sanpheseau_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_padet_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_maehia_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_electionmap_template2026_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', 'layer': 'layer', 'path': 'path', 'tier': 'tier', });
lyr_electionscore_data_2026_9.set('fieldAliases', {'ref': 'ref', 'reg_off': 'reg_off', 'tambon': 'tambon', 'el_num': 'el_num', 'el_place': 'el_place', 'pop_E_men': 'pop_E_men', 'pop_E_wome': 'pop_E_wome', 'POPE': 'POPE', 'inter': 'inter', 'ex_region': 'ex_region', 'latitude': 'latitude', 'longitude': 'longitude', '1_NVS': '1_NVS', '2_PPLE': '2_PPLE', '3_setakit': '3_setakit', '4_KLA': '4_KLA', '5_PJT': '5_PJT', '6_PT': '6_PT', '7_DP': '7_DP', '8_okart': '8_okart', '9_RTSC': '9_RTSC', '10_KM': '10_KM', '11_RAK': '11_RAK', '12_SERI': '12_SERI', 'FALSECARD': 'FALSECARD', 'NOVOTE': 'NOVOTE', 'total': 'total', 'winner': 'winner', '%มาใ': '%มาใ', '%ไม่': '%ไม่', });
lyr_tambon_CMMC_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_faham_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_tambon_changpueak_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_suthep_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_sanpheseau_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_padet_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_maehia_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_electionmap_template2026_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'tier': 'Range', });
lyr_electionscore_data_2026_9.set('fieldImages', {'ref': 'TextEdit', 'reg_off': 'TextEdit', 'tambon': 'TextEdit', 'el_num': 'TextEdit', 'el_place': 'TextEdit', 'pop_E_men': 'TextEdit', 'pop_E_wome': 'TextEdit', 'POPE': 'TextEdit', 'inter': 'TextEdit', 'ex_region': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', '1_NVS': 'TextEdit', '2_PPLE': 'TextEdit', '3_setakit': 'TextEdit', '4_KLA': 'TextEdit', '5_PJT': 'TextEdit', '6_PT': 'TextEdit', '7_DP': 'TextEdit', '8_okart': 'TextEdit', '9_RTSC': 'TextEdit', '10_KM': 'TextEdit', '11_RAK': 'TextEdit', '12_SERI': 'TextEdit', 'FALSECARD': 'TextEdit', 'NOVOTE': 'TextEdit', 'total': 'TextEdit', 'winner': 'TextEdit', '%มาใ': 'TextEdit', '%ไม่': 'TextEdit', });
lyr_tambon_CMMC_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_faham_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_tambon_changpueak_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_suthep_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_sanpheseau_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_padet_6.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_maehia_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', 'moo': 'inline label - visible with data', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_electionmap_template2026_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'moo': 'no label', 'population': 'no label', 'tambon': 'no label', 'area': 'no label', 'layer': 'no label', 'path': 'no label', 'tier': 'no label', });
lyr_electionscore_data_2026_9.set('fieldLabels', {'ref': 'hidden field', 'reg_off': 'inline label - visible with data', 'tambon': 'inline label - visible with data', 'el_num': 'inline label - visible with data', 'el_place': 'inline label - visible with data', 'pop_E_men': 'inline label - visible with data', 'pop_E_wome': 'inline label - visible with data', 'POPE': 'inline label - visible with data', 'inter': 'inline label - visible with data', 'ex_region': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', '1_NVS': 'inline label - visible with data', '2_PPLE': 'inline label - visible with data', '3_setakit': 'inline label - visible with data', '4_KLA': 'inline label - visible with data', '5_PJT': 'inline label - visible with data', '6_PT': 'inline label - visible with data', '7_DP': 'inline label - visible with data', '8_okart': 'inline label - visible with data', '9_RTSC': 'inline label - visible with data', '10_KM': 'inline label - visible with data', '11_RAK': 'inline label - visible with data', '12_SERI': 'inline label - visible with data', 'FALSECARD': 'inline label - visible with data', 'NOVOTE': 'inline label - visible with data', 'total': 'inline label - visible with data', 'winner': 'inline label - visible with data', '%มาใ': 'hidden field', '%ไม่': 'hidden field', });
lyr_electionscore_data_2026_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});