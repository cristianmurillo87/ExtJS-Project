Ext.define('Estratificacion.controller.Login',{
    extend:'Ext.app.Controller',
    requires:[
        'Estratificacion.Global',
        'Estratificacion.view.Login'
    ],
    views:[
        'Estratificacion.view.Login'
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