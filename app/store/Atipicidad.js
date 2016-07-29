/**
 * @author Cristian Murillo
 */
Ext.define('Estratificacion.store.Atipicidad',{
	extend:'Ext.data.Store',
	model:'Estratificacion.model.Atipicidad',
	fields:['gid','lado_manz','cod_predio','direccion','tipo_atip','estrato','justificacion'],
	pageSize:200,
	autoLoad:true,
	proxy:{
		
		type:'ajax',
		api:{
			read:'php/listados/ListaAtipicas.php',
			destroy:'php/listados/BorraAtipicas.php'
		},
		reader:{
			type:'json',
			root:'data'
		},
		writer:{
			type:'json',
			root:'data',
			encode:true
		}
	}
});