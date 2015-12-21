

//Todo一覧表示用ビュー
define(function(require) {
	var TodoItemView = require('views/todo-item-view');
	var TodoCompositeView = Marionette.CompositeView.extend({
        template: '#todo-composite-template',

        childView : TodoItemView,

        childViewContainer : 'tbody',

        ui : {
            addTodo : '#addTodo',
            newTodo : '#new-todo'
        },

        events : {
            'click @ui.addTodo' : 'onCreateTodo',
        },

        initialize: function(){
            _.bindAll( this, 'onCreatedSuccess' );
        },

        onCreateTodo : function() {
            this.collection.create(this.newAttributes(), {
                  silent:  true ,
                  success: this.onCreatedSuccess
            });
            this.ui.newTodo.val('');
        },

        newAttributes : function() {
            return {
                todo : this.ui.newTodo.val().trim(),
                status : 0
            };
        },

        onCreatedSuccess : function(){
            this.collection.fetch({ reset : true });
        },

    });
	return TodoCompositeView;
});
