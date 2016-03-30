//require設定
var require = {

    // キャッシュ防止
    urlArgs: "v=" + (new Date()).getTime(),

    // モジュール読み込みのbaseUrlを指定
    baseUrl: '/rest-study/js/',

    // ファイルのpathを指定
    paths : {
        'jquery' : 'lib/jquery-2.1.3.min',
        'underscore' : 'lib/underscore-min',
        'backbone' : 'lib/backbone-min',
        'marionette' : 'lib/backbone.marionette.min',
	 'bootstrap' : '../bootstrap/js/bootstrap.min'
    },

    // ファイルの依存関係を指定
    shim : {
        'jquery' : {
            exports : '$'
        },
        'underscore' : {
            deps : ['jquery'],
            exports : '_'
        },
        'backbone' : {
            deps : ['jquery', 'underscore'],
            exports : 'Backbone'
        },
        'marionette' : {
            deps : ['backbone'],
            exports : 'Marionette'
        },
       'bootstrap' : {
           deps : ['jquery']
       }
    }
};
