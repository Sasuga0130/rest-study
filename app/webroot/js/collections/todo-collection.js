
//Todo一覧表示用コレクション
define(function(require) {
   // app.TodoCollection = Backbone.Collection.extend({
       var TodoModel = require('models/todo-model');
       var TodoCollection =  Backbone.Collection.extend({
	 url : '/rest-study/todo_lists.json',
        model : TodoModel,

        parse : function(response) {
        //    コレクションをパース
            console.log("コレクションをパース");
            return response;
        }
    });
	return TodoCollection;
});
