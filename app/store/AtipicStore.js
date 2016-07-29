Ext.define('Estratificacion.store.AtipicStore',{
						extend:'Ext.data.Store',
						fields:['tipo_atip','tipo'],
						data:[
								{tipo_atip:'p', tipo:'Positiva'},
								{tipo_atip:'n', tipo:'Negativa'}
							 ],
						autoLoad: true
		});