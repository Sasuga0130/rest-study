
var app = app || {};

//Todo一覧の1件表示用ビュー
(function(app) {
    app.TodoItemView = Backbone.View.extend({
     //   DOMに要素追加のタグ名
        tagName : 'tr',

        //テンプレート
        template : _.template($('#item-template').html()),
//       DOMイベントハンドラ設定
       events : {
  //         チェックボックスクリック時
           'click .toggle' : 'onStatusToggleClick',
           //削除ボタンクリック時
            'click .remove-link' : 'onRemoveClick',
       },
         
        initialize : function() {
 		this.listenTo(this.model, 'destroy', this.remove);
        },
        render : function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
       onStatusToggleClick : function(e) {
           this.model.toggle();
       },
       onRemoveClick : function(e) {
           this.model.destroy({
               wait : true
           });
       },
    });
})(app);
