Ext.define('Estratificacion.controller.listados.ListadoTerrenos',{
	extend:'Ext.app.Controller',
	models:['Estratificacion.model.Terreno'],
	stores:['Estratificacion.store.Terreno'],
	views:['Estratificacion.view.grid.listados.TerrenosGrid',
		   'Estratificacion.view.Listados'
	      ],
	init:function(application){
		this.control({
			"#op-listaterrenos":{
				click:this.abrirListadoTerrenos
			}
		});
	},
	abrirListadoTerrenos:function(btn, e, eOpts){
		this.crearListadoTerrenos();
		
	},
	crearListadoTerrenos:function(){
		var listadoTerrenos=Ext.create('Estratificacion.view.Listados',{
				title:'Listado de Predios',
				items:[{xtype:'listadoterrenosgrid'}]
		
		});
		
		return listadoTerrenos;
	}
	
});