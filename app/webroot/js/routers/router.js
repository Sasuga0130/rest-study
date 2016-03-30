



define(function(require) {
	  var KinnikuController = require('routers/controller');  
           var KinnikuRouter = Marionette.AppRouter.extend({
               //コントローラをインスタンス化
              //  console.log("fjdo");
               controller: new KinnikuController(),
              // ルーティング設定
               appRoutes : {
'login'             : 'login',
            ''                  : 'kinnikuLists',  
            'kinniku-lists'        : 'kinnikuLists',  
           'kinniku-lists/group' : 'kinnikuGroup',
	   'kinniku-lists/:id' : 'kinnikuDetail'
        },

    });
return KinnikuRouter;
});

