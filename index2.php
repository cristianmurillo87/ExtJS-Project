<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>SIG Estratificacion</title>
        <meta name="author" content="Cristian Murillo" />
		<link rel="icon" href="resources/images/icon.png" type="image/x-icon">
        <!-- Date: 2014-09-29 -->
        <!--link rel="stylesheet" type="text/css" href="lib/ext/resources/cris-theme/KitchenSink-all.css"-->
       <!--mi tema-->
		<!--link rel="stylesheet" type="text/css" href="lib/ext/resources/cris-theme/cris-theme.css"-->
		<!--tema gris-->
        <link rel="stylesheet" type="text/css" href="resources/fonts/font-awesome/css/font-awesome.min.css">    
        <link rel="stylesheet" type="text/css" href="lib/ext/resources/ext-theme-gray/ext-theme-gray-all.css">
        <!--link rel="stylesheet" type="text/css" href="lib/ext/resources/css/basic-light/basic-core.css"-->
        <!--tema clasico-->
		<!--link rel="stylesheet" type="text/css" href="lib/ext/resources/ext-theme-classic/ext-theme-classic-all.css"-->
		<!--tema neptune-->
		<!--link rel="stylesheet" type="text/css" href="lib/ext/resources/ext-theme-neptune/ext-theme-neptune-all.css"-->
        <link rel="stylesheet" type="text/css" href="lib/ux/css/LiveSearchGridPanel.css">
        <link rel="stylesheet" type="text/css" href="lib/ux/statusbar/css/statusbar.css">
        <link rel="stylesheet" type="text/css" href="resources/css/app.css">
        <script type="text/javascript" src="lib/ext/ext-all-debug.js"></script>
        <script type="text/javascript" src="lib/openlayers/OpenLayers.js"></script>
        <script type="text/javascript" src="lib/pro4js/proj4js-compressed.js"></script>
        <script type="text/javascript" src="app.js"></script>
        <script type="text/javascript" src="app/Validadores.js"></script>
		 <script src="http://maps.google.com/maps/api/js?v=3"></script>
        <style type="text/css">
            .blue-label label {
            color: #0000A0;/*#0B0B3B*/
            font-weight: bold;
            font-size: 0.9em;

            }
            .black-label label {
            color: #000000;/*#0B0B3B*/
            font-weight: bold;
            font-size: 0.9em;

            }
        </style>
        <script>
            Ext.Loader.setConfig({
                enabled: true,
                disableCaching: false,
                paths: {
                    'GeoExt': "lib/geoext/src/GeoExt",
                    'Ext': "lib/ext/src",
                    'Ext.ux':'lib/ux'
                }
            });
        </script>
        <script>
            Ext.require([
                'Estratificacion.Global',
                'GeoExt.data.ScaleStore',
                'GeoExt.Action',
                'GeoExt.tree.LayerLoader',
                'GeoExt.tree.Panel'
            ]);

            Ext.onReady(function(){
                Ext.QuickTips.init();
            });
        </script>
    </head>
    <body>

    </body>

</html>
