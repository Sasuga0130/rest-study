//ログイン用モデル
define(function() {
    var LoginModel = Backbone.Model.extend({

        parse : function(response) {
            if(response.message){
                this.loginMessage = response.message;
            }
            return response.User;
        },

        loginMessage : null,

       // ログイン済みかどうか判定
        isLoggedIn : function(){
            return this.get('id') ? true : false;
        },

       // ログイン中のユーザ情報取得
        getLoginUser : function(onLoggedIn, onNotLoggedIn){
            this.urlRoot = '/rest-study/users/loggedin';
            this.fetch(
                {
                    wait : true,
                    success : function(){
                        onLoggedIn();
                    },
                    error : function(){
                        onNotLoggedIn();
                    },
                }
            );
        },

       // ログインする
        login : function(username, password, onLoginSuccess, onLoginError){
            this.urlRoot = '/rest-study/users/login';
            this.save(
                {
                    username : username, 
                    password : password
                }, {
                    success : function(model){
                        if(model.get('id')){
                            onLoginSuccess(model.loginMessage);
                        }else{
                            onLoginError(model.loginMessage);
                        }
                    },
                }
            );
        },

     //   ログアウトする
        logout : function(onLogoutSuccess){
            this.urlRoot = '/rest-study/users/logout';
            this.save(
                {}, 
                {
                    success : function(model){
                        onLogoutSuccess(model.loginMessage);
                    },
                }
            );
        },

   //     登録（サインアップ）する
        signup : function(username, password, name, onSignUpSuccess, onSignUpError){
            this.urlRoot = '/rest-study/users/signup';
            this.save(
                {
                    username : username, 
                    password : password,
                    name     : name
                }, {
                    success : function(model){
                        if(model.get('id')){
                            onSignUpSuccess(model.loginMessage);
                        }else{
                            onSignUpError(model.loginMessage);
                        }
                    },
                }
            );
        },
    });
    return LoginModel;
});

