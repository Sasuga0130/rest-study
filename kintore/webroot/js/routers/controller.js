//controller
console.log('load controller');
define(function() {
    console.log('run controller');
    var TodoController = Marionette.Controller.extend({
       login : function(){
//           ログイン画面
           this.nextView('views/login-layout-view', null, true);
       },

        todoLists : function() {
  //          Todoレイアウト用ビューにルーティング
            this.nextView('views/todo-layout-view');
        },

        todoDetail : function(id) {
            this.nextView('views/todo-detail-layout-view', {modelId : id});
        },

        nextView : function(viewPath, option,tryShowLoginScreen) {
           if(window.application.isLoggedIn()){
         //      ログイン済み
               if(tryShowLoginScreen){
           //        ログイン済みなのにログイン画面に遷移しようとしている場合は
             //      TODOリスト画面にルーティング
                   Backbone.history.navigate('#todo-lists', {trigger: true, replace: true});
                   return;
               }
           }else{
              // 未ログイン
               if(!tryShowLoginScreen){
                //   未ログイン状態でログイン画面以外に遷移しようとしている場合は
                  // ログイン画面にルーティング
                   Backbone.history.navigate('#login', {trigger: true, replace: true});
                   return;
               }
           }
      //     ヘッダ表示
           this.showHeaderRegion(tryShowLoginScreen);
        //   コンテンツ表示
            require([viewPath], function(View){
                window.application.mainRegion.show(new View(option));


            });
        },
       
       showHeaderRegion : function(tryShowLoginScreen){
           if(tryShowLoginScreen){
       //        ログイン画面遷移時はヘッダ非表示
               window.application.headerRegion.empty();
           }else if(!window.application.headerRegion.hasView()){
         //      ログイン画面以外遷移時、かつヘッダ未表示の場合ヘッダ表示
               require(['views/header-view'], function(View){
                   window.application.headerRegion.show(new View({
                       model : window.application.loginUser
                   }));
               });
           }
       }
       

    });
    return TodoController;
});
