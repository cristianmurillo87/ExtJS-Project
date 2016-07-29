Ext.define('Estratificacion.Application',{
			name:'Estratificacion',
			extend:'Ext.app.Application',
			requires:[
				'Estratificacion.Global',
				'Ext.ux.LiveSearchGridPanel',
				'GeoExt.Action',
				'GeoExt.data.ScaleStore',
				'GeoExt.tree.LayerLoader',
				'GeoExt.tree.Panel',
				'GeoExt.tree.LayerContainer',
			    'GeoExt.tree.OverlayLayerContainer',
			    'GeoExt.tree.BaseLayerContainer',
			    'GeoExt.data.LayerTreeModel'
			],
			views:[
				'Estratificacion.view.Viewport',
				'Estratificacion.view.MenuPpal',
				'Estratificacion.view.PanelTitulo',
				'Estratificacion.view.Viewport',
				'Estratificacion.view.AtipicVentana',
				'Estratificacion.view.grid.EliminaLadoManzanaGrid',
				'Estratificacion.view.grid.listados.LadosGrid',
				'Estratificacion.view.grid.listados.TerrenosGrid',
				'Estratificacion.view.grid.listados.AtipicasGrid',
				'Estratificacion.view.EliminaLadoManzana',
				'Estratificacion.view.BuscaTerrenoForm',
				'Estratificacion.view.ModificaTerrenoForm',
				'Estratificacion.view.grid.EliminaAtipicaGrid',
				'Estratificacion.view.EliminaAtipica',
				'Estratificacion.view.Listados',
				'Estratificacion.view.chart.Estrato',
				'Estratificacion.view.NuevaContrasena',
				'Estratificacion.view.InfoPredio',
				'Estratificacion.view.Login'
			],
			stores:[
				'Estratificacion.store.AndenStore',
				'Estratificacion.store.AntejardinStore',
				'Estratificacion.store.FachadaStore',
				'Estratificacion.store.FocoStore',
				'Estratificacion.store.GarajeStore',
				'Estratificacion.store.PuertaStore',
				'Estratificacion.store.ViaStore',
				'Estratificacion.store.LadoManzana',
				'Estratificacion.store.AtipicStore',
				'Estratificacion.store.ZonaStore',
				'Estratificacion.store.Terreno',
				'Estratificacion.store.Atipicidad',
				'Estratificacion.store.Estrato',
				'Estratificacion.store.Grafico',
				'Estratificacion.store.Comuna',
				'Estratificacion.store.Barrio',
				'Estratificacion.store.consulta.LadoManzana',
				'Estratificacion.store.consulta.LadoManzana',
				'Estratificacion.store.consulta.Atipicidad'
			],
			models:[
				'Estratificacion.model.LadoManzana',
				'Estratificacion.model.consulta.LadoManzana',
				'Estratificacion.model.Atipicidad',
				'Estratificacion.model.Terreno',
				'Estratificacion.model.Estrato',
				'Estratificacion.model.Grafico',
				'Estratificacion.model.Comuna',
				'Estratificacion.model.Barrio',
				'Estratificacion.model.Busca',
				'Estratificacion.model.TreeStore'
			],
			controllers:[
				 'Estratificacion.controller.Main',
				 'Estratificacion.controller.EliminaLado',
				 'Estratificacion.controller.GuardaLado',
				 'Estratificacion.controller.GuardaAtipica',
				 'Estratificacion.controller.ModificaTerreno',
				 'Estratificacion.controller.EliminaAtipica',
				 'Estratificacion.controller.listados.ListadoLados',
				 'Estratificacion.controller.listados.ListadoTerrenos',
				 'Estratificacion.controller.listados.ListadoAtipicas',
				 'Estratificacion.controller.chart.DistrEstrato',
				 'Estratificacion.controller.chart.DistrComuna',
				 'Estratificacion.controller.Sesion',
				 'Estratificacion.controller.InfoPredio',
				 'Estratificacion.controller.Login'
			],
			launch: function(){
				Ext.state.Manager.setProvider(new Ext.state.CookieProvider({
					expires: new Date(new Date().getTime()+1000*60*60*8),
					prefix:''
				}));
				
				var loggedIn;
				
				loggedIn = Ext.state.Manager.get('isUserLoggedIn');
				
				Ext.widget(loggedIn ? 'main': 'login');
				
			}

});
