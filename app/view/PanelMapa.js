/**
 * @author Cristian Murillo
 */

 extent= new OpenLayers.Bounds(1053794.375,860093.875,1068565.125,879537.75);

	mapa = new OpenLayers.Map("Estratificacion",{
	allOverlays:false,
	projection: "EPSG: 97393",
	maxExtent: extent,
	units: 'm',
	panMethod:'null',
	scales:[100, 200, 500, 800, 1000, 1500, 2000, 5000, 6000, 8000, 10000, 15000, 20000, 25000, 30000, 50000, 70000, 80000, 100000, 110000]
	
	
});




/*-----------------------------------Creacion de los menus para consultas-----------------------------*/	
var toolbar=[],control, controles={};

	toolbar.push(" ");
	
// Control Navegacion
    control= Ext.create('GeoExt.Action',{
	text:'',
	iconCls:'fa fa-home',
	control: new OpenLayers.Control.Navigation(),
	map:mapa,
	tooltip: 'Navegacion',
    pressed: false
	});
	
	controles["navegacion"]=control;
	toolbar.push(Ext.create('Ext.button.Button', control));
	
//	toolbar.push(" ");
	
// Control Maxima Extension
    control= Ext.create('GeoExt.Action',{
	text:'',
	iconCls:'max-extent',
	control: new OpenLayers.Control.ZoomToMaxExtent(),
	map:mapa,
	tooltip: 'Extension del Mapa',
	pressed: false
	});
	
	controles["max_extent"]=control;
	toolbar.push(Ext.create('Ext.button.Button', control));
	
//	toolbar.push(" ");

// Control Zoom a Cuadricula
    control= Ext.create('GeoExt.Action',{
	text:'',
	iconCls:'zoomin',
	control: new OpenLayers.Control.ZoomIn(),
	map:mapa,
	tooltip: 'Aumentar Zoom',
	pressed: false
	});
	
	controles["zoomin"]=control;
	toolbar.push(Ext.create('Ext.button.Button', control));
	
	//toolbar.push(" ");
	
	// Control Zoom a Cuadricula
    control= Ext.create('GeoExt.Action',{
	text:'',
	iconCls:'zoomout',
	control: new OpenLayers.Control.ZoomOut(),
	map:mapa,
	tooltip: 'Disminuir Zoom',
	pressed: false
	});
	
	controles["zoomout"]=control;
	toolbar.push(Ext.create('Ext.button.Button', control));
	
	//toolbar.push(" ");
	//toolbar.push("-");
	
		// Control Zoom Anterior
		
	var nh= new OpenLayers.Control.NavigationHistory();
	mapa.addControl(nh);
	
    control= Ext.create('GeoExt.Action',{
	text:'',
	iconCls:'zoomprev',
	control: nh.previous,
	map:mapa,
	tooltip: 'Zoom Anterior'
	});
	
	controles["zoomprev"]=control;
	toolbar.push(Ext.create('Ext.button.Button', control));
	
	//toolbar.push(" ");
	
	// Control Zoom Siguiente
	control= Ext.create('GeoExt.Action',{
	text:'',
	iconCls:'zoomnext',
	control: nh.next,
	map:mapa,
	tooltip: 'Zoom Siguiente'
	});
	
	controles["zoomprev"]=control;
	toolbar.push(Ext.create('Ext.button.Button', control));
	
	//toolbar.push("");
	//toolbar.push("-");
	//toolbar.push(" ");
	
	// Control Medir Longitud
	
	var dist=  new OpenLayers.Control.Measure(OpenLayers.Handler.Path,{
		active:false,
		persist: true, 
    	immediate: true,
    	eventListeners:{
    		'measurepartial':function( event ) { 
    		if(toolArea.active){toolArea.deactivate();}
    		
  			var l=Ext.Msg.show({title:'Longitud', msg: Number(event.measure).toFixed(3) + ' ' + event.units, height:30,closable: true, modal:false/*, buttons:Ext.Msg.OK*/});
   				 l.setXY([1100,100]);
   				 /*console.log(area.getXY());*/
   				 }
				}});
	
	
	
	control= Ext.create('GeoExt.Action',{
	text:'',
	itemId :'measure',
	iconCls:'measure-lenght',
	control:dist,
	map:mapa,
	enableToggle: true,
	tooltip: "Medir Distancia",
	allowDepress:true
	});
	
	mapa.addControl(dist);
	controles["measure"]=control;
	toolbar.push(Ext.create('Ext.button.Button', control));
	
	//toolbar.push("");
	
	// Control Medir Area
	
	var toolArea= new OpenLayers.Control.Measure(OpenLayers.Handler.Polygon,{
						persist: true, 
    					immediate: true,
    					eventListeners: {'measurepartial':	function(event){
    						if (dist.active){dist.deactivate();}
    						 var area=Ext.Msg.show({
    								title: 'Area',
    								modal:false,
    								closable:true,
    								x:1000,
    								y:1000,
    								bodyStyle: {padding: 10},
    								msg: Number(event.measure).toFixed(3) + " " + event.units +"²",
    								buttons:Ext.Msg.OK
    				    			});
    				    		area.setXY([1100,100]);
    							
    		    	}
    		    	}});
    		    	
	control= Ext.create('GeoExt.Action',{
	text:'',
	itemId :'measure-a',
	iconCls:'measure-area',
	control:toolArea ,
	map:mapa,
	enableToggle: true,
    tooltip: "Medir Distancia",
	allowDepress:true
	});
	mapa.addControl(dist);
	controles["area"]=control;
	toolbar.push(Ext.create('Ext.button.Button', control));
	
	//toolbar.push("");
	//toolbar.push("-");
	// Control Informacion
	
	/*control= Ext.create('GeoExt.Action',{
	text:'',
	itemId :'info',
	iconCls:'infotool',
	tooltip: 'Informacion'
	});
	
	controles["info"]=control;
	toolbar.push(Ext.create('Ext.button.Button', control));
	
	toolbar.push("");*/ // Control de informacion desactivado
	
	// Menu de Escalas
	var scale =new OpenLayers.Control.ScaleLine();
	mapa.addControl(scale);
	
    var escalas = Ext.create("GeoExt.data.ScaleStore", {map: mapa});
    var zoomMenu = Ext.create("Ext.form.ComboBox", {
            store: escalas,
            emptyText: "Escala",
            listConfig: {
                getInnerTpl: function() {
                    return "1: {scale:round(0)}";
                }
            },
            editable: false,
            width:100,
            triggerAction: 'all',
            queryMode: 'local'
        });

        zoomMenu.on('select', 
            function(combo, record, index) {
                mapa.zoomTo(record[0].get("level"));
            },
            this
        );     

        mapa.events.register('zoomend',this, function() {
        		var escala = escalas.queryBy(function(record){
                return mapa.getZoom() == record.data.level;
            });

            if (escala.length > 0) {
                escala = escala.items[0];
                zoomMenu.setValue("1 : " + parseInt(escala.data.scale));
            } else {
                if (!zoomMenu.rendered) return;
                zoomMenu.clearValue();
            }
        });


	   toolbar.push(zoomMenu);
     //  toolbar.push("");
  
       
       var buscar= Ext.create('Ext.button.Button',{
       			   text:'Buscar',
       			   iconCls:'buscar',
       			   tooltip:'Buscar'
       			   
       	
       });
           
       toolbar.push(buscar);
                 
    var coord= new OpenLayers.Control.MousePosition({div:document.getElementById("fondo"), prefix: 'Coordenada: ',  numDigits:3, suffix: ' Metros'});
	mapa.addControl(coord);
 
/*-----------------------------------Termina creacion de controles------------------------------------*/	

/*Creacion de la Clase Mapa*/
Ext.define('Estratificacion.view.PanelMapa',{
	extend:'GeoExt.panel.Map',
	alias:'widget.panelmapa',
	region:'center',
	map: mapa,
	zoom: 1,
    layers: [
        new OpenLayers.Layer.WMS(
            "Ejes Viales", 
            "http://localhost:8081/geoserver/app_estratificacion/wms",
            {
                layers: 'app_estratificacion:ejes_viales',
                transparent:true,
                format:'image/png'
                },{
                displayOutsideMaxExtent: true,
                displayInLayerSwitcher:true,
                
                isBaseLayer: false,
                minScale:12000,
                transitionEffect: 'resize',
            	yx : {'EPSG:97393' : false}
            }
        ),
        new OpenLayers.Layer.WMS(
            "Manzanas Catastrales", "http://localhost:8081/geoserver/app_estratificacion/wms",
            {
                layers: 'app_estratificacion:manzana',
                transparent:true,
                format:'image/png'
                 },{
                displayOutsideMaxExtent: true,
                displayInLayerSwitcher:true,
                isBaseLayer: false,
                minScale:17000,
            	yx : {'EPSG:97393' : false}
            }
        ),
        new OpenLayers.Layer.WMS(
            "Terrenos", "http://localhost:8081/geoserver/app_estratificacion/wms",
            {
                layers: 'app_estratificacion:terrenos',
                transparent:true,
                format:'image/png'
                },{
                displayOutsideMaxExtent: true,
                displayInLayerSwitcher:true,
                isBaseLayer: false,
                minScale:5000,
            	yx : {'EPSG:97393' : false}
            }
        ),
        new OpenLayers.Layer.WMS(
            "Barrios", "http://localhost:8081/geoserver/app_estratificacion/wms",
            {
                layers: 'app_estratificacion:barrio',
                transparent:true,
                format:'image/png'
                 },{
                displayOutsideMaxExtent: true,
                isBaseLayer: false,
                displayInLayerSwitcher:true,
                minScale:50000,
            	yx : {'EPSG:97393' : false}
            }
        ),
        new OpenLayers.Layer.WMS(
				"Comunas","http://localhost:8081/geoserver/app_estratificacion/wms", 
   			 {
   			 	'layers': 'app_estratificacion:comuna', 
   			 	transparent: true, 
   			 	format: 'image/png'
   			 	},{
   			 	displayOutsideMaxExtent: true,
   			 	displayInLayerSwitcher:true,
   			 	isBaseLayer: true, 
   			 	yx : {'EPSG:97393' : false}}
			  )
    ],
	dockedItems:[{
		xtype:'toolbar',
		dock:'top',
		items:toolbar
	}]
});


	

