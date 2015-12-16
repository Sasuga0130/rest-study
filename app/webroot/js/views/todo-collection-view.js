var app = app || {};

//Todo一覧表示用ビュー
(function(app) {
    app.TodoCollectionView = Backbone.View.extend({
 el : '#content',
   tagName : 'div',
        todoCollection : {},
        initialize : function() {
            
            this.todoCollection = new app.TodoCollection()
	    this.todoCollection.on('add', this.addOne, this);
            this.$el.html($('#list-template').html());
	    this.newTodo = this.$('#new-todo');
            this.render();
        },
       events : {
          'click #addTodo' : 'onCreateTodo',
       },
        render : function() {
            this.todoCollection.fetch();
            return this;
        },
 	onCreateTodo : function(e) {
           this.todoCollection.create(this.newAttributes(), {
               wait : true
           });
           this.newTodo.val('');
           this.todoCollection.fetch();
       },
	addOne : function(todo) {
          var itemView = new app.TodoItemView({
               model : todo
           });
           $('#todo-lists').append(itemView.render().el);
       },
       newAttributes : function() {
           return {
               todo : this.newTodo.val().trim(),
               status : 0
           }
       }
    })
})(app);
