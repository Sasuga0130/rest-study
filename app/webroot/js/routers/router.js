var app = app || {};

(function(app) {
    app.TodoRouter = Backbone.Router.extend({
        routes : {
            ''                  : 'todoLists',  
            'todo-lists'        : 'todoLists',  
            'todo-lists/:id'    : 'todoDetail'
        },
        todoLists : function() {
            alert('TODO一覧表示');
        },
        todoDetail : function(id) {
            alert('id = ' + id + ' のTODO詳細表示');
        },
    });
})(app);
