

//Todo一覧表示用ビュー
define(function(require) {
	var TodoItemView = require('views/todo-item-view');
	 var TodoModel = require('models/todo-model');

	var TodoCompositeView = Marionette.CompositeView.extend({
        template: '#todo-composite-template',

        childView : TodoItemView,

        childViewContainer : 'tbody',
	newTodoModel : new TodoModel(),
        ui : {
            addTodo : '#addTodo',
            newTodo : '#new-todo',
	     userList : '#user-list'
        },

        events : {
            'click @ui.addTodo' : 'onCreateTodo',
        },

        initialize: function(options){
            _.bindAll( this, 'onCreatedSuccess' );
	 this.userList = options.userList;
	 this.listenTo(this.newTodoModel, 'invalid', this.renderErrorMessage);
        },
       onRender : function() {
           //ユーザ一覧を表示
           this.showUserList(this.ui.userList, this.userList);
          // ログインユーザをデフォルトで選択状態にする
           this.ui.userList.val(window.application.loginUser.id);
       },
                   
      // ユーザ一覧を表示
       showUserList : function($list, userList){
           $.each(userList, function(index, userModel) {
               $list.append(
                   "<option value='" 
                   + userModel.attributes.id + "'>"
                   + userModel.attributes.name + "</option>");
           });
       },
           
        onCreateTodo : function() {
           this.newTodoModel.clear({silent : true});
           this.newTodoModel.set(this.newAttributes());
           this.collection.create(this.newTodoModel, {
                  silent:  true ,
                  success: this.onCreatedSuccess
            });
            this.ui.newTodo.val('');
        },

        newAttributes : function() {
            return {
                todo : this.ui.newTodo.val().trim(),
                status : 0,
		 assignee : this.ui.userList.val()
            };
        },

        onCreatedSuccess : function(){
            this.collection.fetch({ reset : true });
        },
       
      // エラー表示
       renderErrorMessage : function(errors){
           var message = '';
           for(var key in errors.validationError){
               message += errors.validationError[key];
           }
           alert(message);
       }
    });
	return TodoCompositeView;
});
