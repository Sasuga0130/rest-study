

//Todo一覧表示用レイアウトビュー
define(function(require) {
	var TodoCollection = require('collections/todo-collection');
	var TodoCompositeView = require('views/todo-composite-view');
	var UserCollection = require('collections/user-collection');
        var TodoLayoutView = Marionette.LayoutView.extend({
       
//	console.log('layout-view');
// テンプレート
        template: '#todo-layout-template',

        regions : {
            listRegion : '#todo-lists',
        },

        onRender : function() {
           this.userCollection = new UserCollection();
           this.listenTo(this.userCollection, 'reset', this.onLoadUsers, this);
           this.userCollection.fetch({reset : true});
       },

      onLoadUsers : function(userCollection) {
            var todoCollection = new TodoCollection();
            this.listenTo(todoCollection , 'reset', this.showTodoList, this);
            todoCollection.fetch({reset : true});
        },

        showTodoList : function(todoCollection){
            this.listRegion.show( new TodoCompositeView({
                collection : todoCollection,
		userList : this.userCollection.models
            }));
        },

    });
	return TodoLayoutView;
});
