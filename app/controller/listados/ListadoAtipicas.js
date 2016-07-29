Ext.define('Estratificacion.controller.listados.ListadoAtipicas',{
	extend:'Ext.app.Controller',
	models:['Estratificacion.model.Atipicidad'],
	stores:['Estratificacion.store.Atipicidad'],
	views:['Estratificacion.view.grid.listados.AtipicasGrid',
		   'Estratificacion.view.Listados'
	      ],
	init:function(application){
		this.control({
			"#op-listaatipicas":{
				click:this.abrirListadoAtipicas
			},
			"listadoatipicasgrid button#tb-btn-eliminaatipica":{
				click:this.borrarAtipica
			}
		});
	},
	abrirListadoAtipicas:function(btn, e, eOpts){
		this.crearListadoAtipicas();
		
	},
	crearListadoAtipicas:function(){
		var listadoAtipicas=Ext.create('Estratificacion.view.Listados',{
				title:'Listado de Atipicas',
				items:[{xtype:'listadoatipicasgrid'}]
		
		});
		
		return listadoAtipicas;
	},
	borrarAtipica:function(btn, e, eOpts){
		 
		 var grid=btn.up('grid');
		 
		 var atipica=grid.getSelectionModel().getSelection();
		 
		 var store=grid.getStore();
		 
			 store.remove(atipica);
		 
			 store.sync();
	}
	
});