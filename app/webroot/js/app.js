var app = app || {};
(function(app) {
    var todoRouter = new app.TodoRouter();  // ①
    Backbone.history.start();               // ②
})(app);
