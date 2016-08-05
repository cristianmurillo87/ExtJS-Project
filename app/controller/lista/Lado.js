Ext.define('Estratificacion.controller.lista.Lado',{
	extend:'Ext.app.Controller',
	models:['Estratificacion.model.Lado'],
	stores:['Estratificacion.store.Lado'],
	views:['Estratificacion.view.grid.lista.Lado',
		   'Estratificacion.view.Lista'
	      ],
	init:function(application){
		this.control({
			"#op-listalados":{
				click:this.abrirListadoLados
			},
			"listadoladosgrid button#tb-btn-eliminalado ":{
				click:this.borrarLado
			}
		});
	},
	abrirListadoLados:function(btn, e, eOpts){
		this.crearListadoLados();
		
	},
	crearListadoLados:function(){
		var listadoLados=Ext.create('Estratificacion.view.Lista');
		
		return listadoLados;
	},
	borrarLado:function(btn, e, eOpts){
		 
		 var grid=btn.up('grid');
		 
		 var lado=grid.getSelectionModel().getSelection();
		 
		 var store=grid.getStore();
		 
			 store.remove(lado);
		 
			 store.sync();
	}
	
});