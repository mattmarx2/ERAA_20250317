ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3763").setExtent([-29201.433062, 102825.617041, -28864.532085, 103059.147364]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_xref_tracado_1 = new ol.format.GeoJSON();
var features_xref_tracado_1 = format_xref_tracado_1.readFeatures(json_xref_tracado_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_xref_tracado_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_xref_tracado_1.addFeatures(features_xref_tracado_1);
var lyr_xref_tracado_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_xref_tracado_1, 
                style: style_xref_tracado_1,
                popuplayertitle: 'xref_tracado',
                interactive: false,
                title: '<img src="styles/legend/xref_tracado_1.png" /> xref_tracado'
            });
var format_ParcelasBUPI_Marco_2 = new ol.format.GeoJSON();
var features_ParcelasBUPI_Marco_2 = format_ParcelasBUPI_Marco_2.readFeatures(json_ParcelasBUPI_Marco_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_ParcelasBUPI_Marco_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelasBUPI_Marco_2.addFeatures(features_ParcelasBUPI_Marco_2);
var lyr_ParcelasBUPI_Marco_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelasBUPI_Marco_2, 
                style: style_ParcelasBUPI_Marco_2,
                popuplayertitle: 'ParcelasBUPI_Marco',
                interactive: false,
                title: '<img src="styles/legend/ParcelasBUPI_Marco_2.png" /> ParcelasBUPI_Marco'
            });
var format_PrediosERAA_3 = new ol.format.GeoJSON();
var features_PrediosERAA_3 = format_PrediosERAA_3.readFeatures(json_PrediosERAA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_PrediosERAA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrediosERAA_3.addFeatures(features_PrediosERAA_3);
var lyr_PrediosERAA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrediosERAA_3, 
                style: style_PrediosERAA_3,
                popuplayertitle: 'PrediosERAA',
                interactive: true,
                title: '<img src="styles/legend/PrediosERAA_3.png" /> PrediosERAA'
            });
var format_LimiteExprop_4 = new ol.format.GeoJSON();
var features_LimiteExprop_4 = format_LimiteExprop_4.readFeatures(json_LimiteExprop_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_LimiteExprop_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteExprop_4.addFeatures(features_LimiteExprop_4);
var lyr_LimiteExprop_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteExprop_4, 
                style: style_LimiteExprop_4,
                popuplayertitle: 'LimiteExprop',
                interactive: false,
                title: '<img src="styles/legend/LimiteExprop_4.png" /> LimiteExprop'
            });
var group_LimiteExpropriacao = new ol.layer.Group({
                                layers: [lyr_LimiteExprop_4,],
                                fold: "open",
                                title: 'LimiteExpropriacao'});
var group_PrediosERAA = new ol.layer.Group({
                                layers: [lyr_PrediosERAA_3,],
                                fold: "open",
                                title: 'PrediosERAA'});
var group_BUPI = new ol.layer.Group({
                                layers: [lyr_ParcelasBUPI_Marco_2,],
                                fold: "open",
                                title: 'BUPI'});
var group_xrefs = new ol.layer.Group({
                                layers: [lyr_xref_tracado_1,],
                                fold: "open",
                                title: 'xrefs'});
var group_Rasters = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: 'Rasters'});

lyr_GoogleSatellite_0.setVisible(true);lyr_xref_tracado_1.setVisible(true);lyr_ParcelasBUPI_Marco_2.setVisible(true);lyr_PrediosERAA_3.setVisible(true);lyr_LimiteExprop_4.setVisible(true);
var layersList = [group_Rasters,group_xrefs,group_BUPI,group_PrediosERAA,group_LimiteExpropriacao];
lyr_xref_tracado_1.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ParcelasBUPI_Marco_2.set('fieldAliases', {'fid': 'fid', 'Area_m2': 'Area_m2', });
lyr_PrediosERAA_3.set('fieldAliases', {'Parcela': 'Parcela', 'AreaTotal': 'AreaTotal', 'Artigo Matriz': 'Artigo Matriz', 'Artigo Antigo': 'Artigo Antigo', 'Descrição Predial': 'Descrição Predial', 'Morada': 'Morada', 'Nome': 'Nome', 'Contribuinte': 'Contribuinte', 'Telefone': 'Telefone', 'Observações': 'Observações', 'AreaCadernetaAtual': 'AreaCadernetaAtual', 'AreasProj_x_AreasMatriz': 'AreasProj_x_AreasMatriz', 'MatrizBupi': 'MatrizBupi', 'Indicacao': 'Indicacao', 'EspacoAgricola': 'EspacoAgricola', 'EspacoAtivEco': 'EspacoAtivEco', 'EspacoEquiInfra': 'EspacoEquiInfra', 'EspacoEspEquiInfra': 'EspacoEspEquiInfra', 'EspacoFlorestal': 'EspacoFlorestal', 'EspacoHabitacional': 'EspacoHabitacional', 'EspacoNatPaisa': 'EspacoNatPaisa', 'EspacoVerde': 'EspacoVerde', 'AreaTotExprop': 'AreaTotExprop', 'RotaMaps': 'RotaMaps', });
lyr_LimiteExprop_4.set('fieldAliases', {'LimiteExpropriacao': 'LimiteExpropriacao', });
lyr_xref_tracado_1.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ParcelasBUPI_Marco_2.set('fieldImages', {'fid': '', 'Area_m2': '', });
lyr_PrediosERAA_3.set('fieldImages', {'Parcela': 'TextEdit', 'AreaTotal': 'TextEdit', 'Artigo Matriz': 'TextEdit', 'Artigo Antigo': 'TextEdit', 'Descrição Predial': 'TextEdit', 'Morada': 'TextEdit', 'Nome': 'TextEdit', 'Contribuinte': 'TextEdit', 'Telefone': 'TextEdit', 'Observações': 'TextEdit', 'AreaCadernetaAtual': 'TextEdit', 'AreasProj_x_AreasMatriz': 'TextEdit', 'MatrizBupi': 'TextEdit', 'Indicacao': 'TextEdit', 'EspacoAgricola': '', 'EspacoAtivEco': '', 'EspacoEquiInfra': '', 'EspacoEspEquiInfra': '', 'EspacoFlorestal': '', 'EspacoHabitacional': '', 'EspacoNatPaisa': '', 'EspacoVerde': '', 'AreaTotExprop': '', 'RotaMaps': '', });
lyr_LimiteExprop_4.set('fieldImages', {'LimiteExpropriacao': '', });
lyr_xref_tracado_1.set('fieldLabels', {'fid': 'header label - visible with data', 'Layer': 'header label - visible with data', 'PaperSpace': 'header label - visible with data', 'SubClasses': 'header label - visible with data', 'Linetype': 'header label - visible with data', 'EntityHandle': 'header label - visible with data', 'Text': 'header label - visible with data', });
lyr_ParcelasBUPI_Marco_2.set('fieldLabels', {'fid': 'header label - visible with data', 'Area_m2': 'header label - visible with data', });
lyr_PrediosERAA_3.set('fieldLabels', {'Parcela': 'header label - visible with data', 'AreaTotal': 'header label - visible with data', 'Artigo Matriz': 'header label - visible with data', 'Artigo Antigo': 'header label - visible with data', 'Descrição Predial': 'header label - visible with data', 'Morada': 'header label - visible with data', 'Nome': 'header label - visible with data', 'Contribuinte': 'header label - visible with data', 'Telefone': 'header label - visible with data', 'Observações': 'header label - visible with data', 'AreaCadernetaAtual': 'header label - visible with data', 'AreasProj_x_AreasMatriz': 'header label - visible with data', 'MatrizBupi': 'header label - visible with data', 'Indicacao': 'header label - visible with data', 'EspacoAgricola': 'header label - visible with data', 'EspacoAtivEco': 'header label - visible with data', 'EspacoEquiInfra': 'header label - visible with data', 'EspacoEspEquiInfra': 'header label - visible with data', 'EspacoFlorestal': 'header label - visible with data', 'EspacoHabitacional': 'header label - visible with data', 'EspacoNatPaisa': 'header label - visible with data', 'EspacoVerde': 'header label - visible with data', 'AreaTotExprop': 'header label - visible with data', 'RotaMaps': 'header label - visible with data', });
lyr_LimiteExprop_4.set('fieldLabels', {'LimiteExpropriacao': 'header label - visible with data', });
lyr_LimiteExprop_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});