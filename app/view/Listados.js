Ext.define('Estratificacion.view.Listados',{
			extend:'Ext.window.Window',
			autoShow:true,
			modal:true,	
			border:false,
			resizable:false,
			title:'Lados de Manzana',
			layout:'fit',
			width:745,
			height:420,
			items:[{
				xtype:'listadoladosgrid'
			}]
		});