var via=Ext.create('Estratificacion.store.ViaStore');

var foco=Ext.create('Estratificacion.store.FocoStore');

var anden=Ext.create('Estratificacion.store.AndenStore');

var antejardin=Ext.create('Estratificacion.store.AntejardinStore');

var garaje=Ext.create('Estratificacion.store.GarajeStore');

var fachada=Ext.create('Estratificacion.store.FachadaStore');

var puerta=Ext.create('Estratificacion.store.PuertaStore');

var zona=Ext.create('Estratificacion.store.ZonaStore');


Ext.define('Estratificacion.view.LadoVentana',{
					require:[
					'Estratificacion.store.ViaStore',
					'Estratificacion.store.FocoStore',
					'Estratificacion.store.AndenStore',
					'Estratificacion.store.AntejardinStore',
					'Estratificacion.store.GarajeStore',
					'Estratificacion.store.FachadaStore',
					'Estratificacion.store.PuertaStore',
					'Estratificacion.store.ZonaStore'
					],
					extend:'Ext.window.Window',
					title:'Crear/ Editar Lado de Manzana',
					alias:'widget.formventana',
					modal:true,
					layout:'fit',
					id:'formventana',
					border:false,
					width:400,
					height:510,
					closable:true,
					items:[{
						xtype:'form',
						layout:'anchor',
						itemId:'ladoForm',
						id:'ladoForm',
						border:false,
						width:400,
						bodyStyle: 'background:rgb(248,248,248);',
					//	bodyPadding:1,
						items:[{
								xtype:'fieldset',
								layout:'hbox',
								margin:7,
								title:'Informaci&oacuten del lado',
								items:[{
										xtype:'textfield',
										fieldLabel:'Lado de Manzana',
										labelAlign:'left',
										name:'lado_manz',
										id:'lado_manz',
										margin:7,
										allowBlank:false,
										maxLength :9,
										minLength :9,
										enforceMaxLength:true,
										fieldStyle:'text-transform:uppercase',
										vtype:'ladomanzana',
										listeners:{
												specialkey:{
													fn:function(field, e){
														if (e.getKey() == e.ENTER) {
														
																										
															if (field.isValid()){
															
															 var mascara = new Ext.LoadMask(Ext.getCmp('ladoForm'), {msg:'Buscando lado de manzana...'});
															     mascara.show();
															
															 
															Ext.Ajax.request({
																url:'php/BuscaLado.php',
																params:{
																	lado_manz:this.value
																},
																success: function(response){
																	
																	
																	var data=Ext.JSON.decode(response.responseText);
																	
																	if(data.success=='true') {
																		mascara.hide();
																		Ext.Msg.show({
																				title:'Aviso',
																				msg:'El lado de manzana existe. Si contin&uacutea se modificar&aacute la informaci&oacuten asociada. ¿Desea Continuar?',
																				buttonText:{yes:'Si', no:'No'},
																				buttons:Ext.Msg.YESNO,
																				icon:Ext.MessageBox.WARNING,
																				fn: function(btn){
																					if (btn=='yes'){
																																																
																					 	Ext.getCmp('fl_via').setValue(Number(data.data.resultado.fl_via));
																						Ext.getCmp('fl_foco').setValue(Number(data.data.resultado.fl_foco));
																						Ext.getCmp('fl_anden').setValue(Number(data.data.resultado.fl_anden));
																						Ext.getCmp('fl_antejar').setValue(Number(data.data.resultado.fl_antejar));
																						Ext.getCmp('fl_garaje').setValue(Number(data.data.resultado.fl_garaje));
																						Ext.getCmp('fl_fachada').setValue(Number(data.data.resultado.fl_fachada));
																						Ext.getCmp('fl_puerta').setValue(Number(data.data.resultado.fl_puerta));
																						Ext.getCmp('fl_zona').setValue(Number(data.data.resultado.fl_zona));
																						Ext.getCmp('estrato').setValue(Number(data.data.resultado.estrato));
																					}
																					
																					else if (btn=='no'){
																						var formulario=Ext.getCmp('ladoForm');
																							formulario.getForm().reset();
																					}
																				}
												
																		});
																		
																	
																	}
																
																else if (data.success=='false') {
																																																			   
																	   	var num_combos=Ext.ComponentQuery.query('#ladoForm combobox');
																																			
																	   		for (var i=0; i<num_combos.length; i++){
																		   			num_combos[i].clearValue();
																		   	}
																		   
																		   Ext.ComponentQuery.query('#ladoForm textfield[name=estrato]')[0].reset();
																	
																	mascara.hide();
																}
															},
															failure:function(form, action){
																mascara.hide();
																var data=Ext.JSON.decode(response.responseText);
																Ext.Msg.show({
																	   title:'Error',
																	   msg: data.errors.reason,
																	   buttons: Ext.Msg.OK,
																	   icon: Ext.MessageBox.ERROR});
															}
														});
									              
									                    }}
									                    
												}
											}
										}
									}]

								},{
									xtype:'fieldset',
											layout:'vbox',
											margin:5,
											title:'Variables',
											items:[{
													xtype:'combobox',
													id:'fl_via',
													name:'fl_via',
													width:270,
													fieldLabel:'1. Tipo de via',
													labelWidth:100,
													store: via,
													queryMode:'local',
													displayField: 'nombre',
													valueField : 'fl_via',
													forceSelection : true,
													allowBlank:false,
													triggerAction: 'all',
													labelSeparator:'',
													anyMatch:true,
													margin:7
												},
												{
													xtype:'combobox',
													width:270,
													id:'fl_foco',
													name:'fl_foco',
													fieldLabel:'2. Focos',
													store: foco,
													queryMode:'local',
													displayField: 'nombre',
													valueField : 'fl_foco',
													forceSelection : true,
													allowBlank:false,
													triggerAction: 'all',
													labelSeparator:'',
													anyMatch:true,
													margin:7
												},
												{
													xtype:'combobox',
													width:280,
													id:'fl_anden',
													name:'fl_anden',
													fieldLabel:'3. Anden',
													store: anden,
													queryMode:'local',
													displayField: 'nombre',
													valueField : 'fl_anden',
													forceSelection : true,
													allowBlank:false,
													labelSeparator:'',
													triggerAction: 'all',
													autoSelect:true,
													anyMatch:true,
													margin:7
												},
													{
													xtype:'combobox',
													width:280,
													id :'fl_antejar',
													name:'fl_antejar',
													fieldLabel:'4. Antejardin',
													store:antejardin,
													queryMode:'local',
													displayField: 'nombre',
													valueField : 'fl_antejar',
													forceSelection : true,
													allowBlank:false,
													triggerAction: 'all',
													labelSeparator:'',
													anyMatch:true,
													margin:7
												},
													{
													xtype:'combobox',
													width:330,
													id :'fl_garaje',
													name:'fl_garaje',
													fieldLabel:'5. Garaje',
													store:garaje,
													queryMode:'local',
													displayField: 'nombre',
													valueField : 'fl_garaje',
													forceSelection : true,
													allowBlank:false,
													triggerAction: 'all',
													labelSeparator:'',
													anyMatch:true,
													margin:7
												},
													{
													xtype:'combobox',
													width:330,
													id :'fl_fachada',
													name:'fl_fachada',
													fieldLabel:'6. Fachada',
													store:fachada,
													queryMode:'local',
													displayField: 'nombre',
													valueField : 'fl_fachada',
													forceSelection : true,
													allowBlank:false,
													triggerAction: 'all',
													labelSeparator:'',
													anyMatch:true,
													margin:7
												},
													{
													xtype:'combobox',
													width:330,
													id :'fl_puerta',
													name:'fl_puerta',
													fieldLabel:'7. Puerta principal',
													store:puerta,
													queryMode:'local',
													displayField: 'nombre',
													valueField : 'fl_puerta',
													forceSelection : true,
													allowBlank:false,
													labelSeparator:'',
													triggerAction: 'all',
													anyMatch:true,
													margin:7
												},
													{
													xtype:'combobox',
													width:150,
													id :'fl_zona',
													name:'fl_zona',
													labelSeparator:'',
													fieldLabel:'8. Zona',
													name:'zona',
													store:zona,
													queryMode:'local',
													displayField: 'id',
													valueField : 'fl_zona',
													forceSelection : true,
													allowBlank:false,
													triggerAction: 'all',
													hideTrigger:true,
													anyMatch:true,
													margin:7
												},
												{
													xtype:'textfield',
													width:150,
													id:'estrato',
													labelSeparator:'',
													fieldLabel:'Estrato',
													name:'estrato',
													maxLength:1,
													enforceMaxLength:true,
													allowBlank:false,
													vtype:'estrato',
													margin:7/*'5 10 10 100'*/
												}
												
												]
								
								
								
									}
										
						]
					
					}],
					
					buttons:[
								{
									xtype:'button',
									text:'Guardar',
									itemId:'btn-guardalado'
								},
								{
									xtype:'button',
									text:'Cancelar',
									itemId:'cancela'
								}
							
					],
					buttonAlign:'center',
					autoShow:true,
					resizable:false
	});
		