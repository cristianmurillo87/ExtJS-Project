Ext.define('Estratificacion.controller.usuario.Login',{
    extend:'Ext.app.Controller',
    requires:[
        'Estratificacion.Global',
        'Estratificacion.view.usuario.Login'
    ],
    views:[
        'Estratificacion.view.usuario.Login'
    ],
    init: function(application){
        this.control({
            "button #btn-login":{
                click:this.onSubmit
            }
        });
    },
    onSubmit:function(btn, e, eOpts){
        console.log("Iniciando Sesion");
    }
});