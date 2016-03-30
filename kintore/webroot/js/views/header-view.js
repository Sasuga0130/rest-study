//ヘッダ用ビュー
define(function(require){
    var UserModel = require('models/user-model');

    var HeaderView = Marionette.ItemView.extend({

       // テンプレート
        template : '#header-template',

        ui : {
            logoutButton : '#logout',
        },

     //   DOMイベントハンドラ設定
        events : {
   //         ログアウトボタンクリック時
            'click @ui.logoutButton' : 'onLogoutClick',
        },

        onLogoutClick : function(){
            var userModel = new UserModel();
            userModel.logout(this.onLogoutSuccess);
        },

        onLogoutSuccess : function(message){
            window.application.clearLoginUser();
            Backbone.history.navigate('#login', {trigger : true, replace : true});
            console.log(message);
        },

    });
    return HeaderView;
});
