Ext.define('Estratificacion.controller.listados.ListadoLados',{
	extend:'Ext.app.Controller',
	models:['Estratificacion.model.LadoManzana'],
	stores:['Estratificacion.store.LadoManzana'],
	views:['Estratificacion.view.grid.listados.LadosGrid',
		   'Estratificacion.view.Listados'
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
		var listadoLados=Ext.create('Estratificacion.view.Listados');
		
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