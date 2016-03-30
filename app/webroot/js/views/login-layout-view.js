//ログイン画面用レイアウトビュー
define(function(require) {
    var LoginModel = require('models/user-model');

    var LoginLayoutView = Marionette.LayoutView.extend({
  //      テンプレート
        template : '#login-layout-template',

    //    UIパーツ
        ui : {
            username       : '#username',           // ログイン時のユーザ名
            password       : '#password',           // ログイン時のパスワード
            loginButton    : '#login',              // ログインボタン
            signupUsername : '#signup-username',    // 登録時のユーザ名
            signupPassword : '#signup-password',    // 登録時のパスワード
            name           : '#signup-name',        // 登録時の氏名
            signupButton   : '#signup'              // 登録ボタン
        },

      //  イベント
        events : {
        //    ログインボタンクリック時
            'click @ui.loginButton' : 'onLoginClick',
          //  登録ボタンクリック時
            'click @ui.signupButton' : 'onsignupClick',
        },

       // ログインボタンクリック時
        onLoginClick : function(){
         //   テキストボックスから文字を取得
            var username = this.ui.username.val();    //ユーザ名
            var password = this.ui.password.val();    //パスワード
            window.application.loginUser.login(
                username,
                password,
                this.onLoginSuccess,
                this.onLoginError);
        },

       // ログイン処理成功時のコールバック
        onLoginSuccess : function(message){
            Backbone.history.navigate('kinniku-lists', {trigger: true, replace: true});
            console.log(message);
        },

       // ログイン処理失敗時のコールバック
        onLoginError : function(message){
            alert(message);
        },

       // 登録ボタンクリック時
        onsignupClick : function(){
         //   テキストボックスから文字を取得
            var username = this.ui.signupUsername.val();    //ユーザ名
            var password = this.ui.signupPassword.val();    //パスワード
            var name = this.ui.name.val();                  //氏名
            var userModel = new LoginModel();
            userModel.signup(
                    username,
                    password,
                    name,
                    this.onsignupSuccess,
                    this.onsignupError);
        },

       // 登録成功時のコールバック
        onsignupSuccess : function(message){
            alert(message);
        },

       // 登録失敗時のコールバック
        onsignupError : function(message){
            alert(message);
        },

    });
    return LoginLayoutView;
});

