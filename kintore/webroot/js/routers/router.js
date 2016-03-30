//router
console.log('load router');
define(function(require) {
    console.log('run router');
    var TodoController = require('routers/controller');
    var TodoRouter = Marionette.AppRouter.extend({
    //    コントローラをインスタンス化
        controller: new TodoController(),
     //   ルーティング設定
        appRoutes : {
	    'login'		: 'login',
            ''                  : 'todoLists',
            'todo-lists'        : 'todoLists',
            'todo-lists/:id'    : 'todoDetail'
        },
    });
    return TodoRouter;
});
