//Application
console.log('load app');
define(function(require){
    console.log('run app');
    var Router = require('routers/router');
    var UserModel = require('models/user-model');
    var Application = Marionette.Application.extend({
        initialize : function(){
      
	 window.location.search;         
      console.log('app.initialize'); 
           // Ajaxのエラーの共通ハンドラを設定
           $(document).ajaxError(function ( e, xhr, options , message ) {
              
		 window.application.ajaxErrorHandler( e, xhr, options , message );
  });
         new Router();
          // ログインユーザ情報をサーバから取得
           this.loginUser = new UserModel();
           this.getLoginUser();
        },

        onStart : function(){
            Backbone.history.start();
        },

        regions : {
	    headerRegion : '#header',
            mainRegion : '#main',
	    footerRegion : '#footer'
        },


      // ログインユーザ情報格納用
       loginUser : null,

      // ログインユーザ情報取得
       getLoginUser : function(){
           this.loginUser.getLoginUser(
               this.onLoggedIn,
               this.onNotLoggedIn
           );
       },
       
      // ログインユーザ情報取得:ログイン済みの場合
       onLoggedIn : function(){
           window.application.start(); // applicaiton.start()はログインチェックの後
       },
       
      // ログインユーザ情報取得:未ログインの場合
       onNotLoggedIn : function(){
           window.application.clearLoginUser();    //ログイン情報をクリアしておく
           window.application.start(); // applicaiton.start()はログインチェックの後
       },
       
   //    ログイン済みか判定
       isLoggedIn : function(){
           return this.loginUser.isLoggedIn();
       },
       
     //  ログインユーザ情報のクリア(ログアウト時)
       clearLoginUser : function(){
           this.loginUser.clear();
       },

       // ajaxのエラーを全てここでハンドリング
       ajaxErrorHandler : function(e, xhr, options , message){
           if( xhr.status === 401 ){
               this.clearLoginUser();
         //       未認証の場合ログイン画面に飛ばす
               Backbone.history.navigate('#login', {trigger : true, replace : true});
                      }else if(xhr.status === 400){
               if(xhr.responseJSON){
                   var errors = xhr.responseJSON.errors;
                   var msg = '';
                   for(var key in errors){
                       for(var idx in errors[key]){
                           msg = msg + errors[key][idx] + '\n';
                       }
                   }
                   alert(msg);
               }else{
                   alert(message);
               }
           }else if(xhr.status > 400 && xhr.status < 500){
           //    ClientErrorの場合はメッセージ表示
               alert(message);
           }else if(xhr.status >= 500 && xhr.status < 600){
             //  ServerErrorの場合はメッセージ表示
               alert(message);
           }

       },

    });
    return Application;
});
