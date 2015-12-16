var app = app || {};

(function(app) {
    app.TodoRouter = Backbone.Router.extend({
        routes : {
            ''                  : 'todoLists',  
            'todo-lists'        : 'todoLists',  
            'todo-lists/:id'    : 'todoDetail'
        },

       currentView : false,

        todoLists : function() {
             //Todo一覧表示用ビューにルーティング
            this.removeCurrentView();
           this.nextView(app.TodoCollectionView);
        },
        todoDetail : function(id) {
           this.removeCurrentView();
           this.nextView(app.TodoDetailView, id);
        },

       nextView : function(View, option) {
           if (document.getElementById('#content') === null) {
               $('#main').append('<div id="content"/>');
           }
           this.currentView = new View(option);
       },
       removeCurrentView : function() {
           if (this.currentView) {
               this.currentView.remove();
           }
       }

    });
})(app);
