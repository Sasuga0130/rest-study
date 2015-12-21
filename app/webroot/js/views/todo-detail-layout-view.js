

//詳細画面用レイアウトビュー
define(function(require){
	var TodoDetailItemView = require('views/todo-detail-item-view');
	var TodoModel = require('models/todo-model');
	var TodoDetailLayoutView = Marionette.LayoutView.extend({
      //  テンプレート
        template : '#todo-detail-layout-template',

        regions : {
            itemRegion : '#todo-item',
        },

        onRender : function() {
            var todoModel = new TodoModel({
                id : this.options.modelId
            });
          //  デルのサーバからのデータ取得完了時、描画を行う
            this.listenTo(todoModel, 'sync', this.showItem, this);
        //    サーバからデータ取得
            todoModel.fetch({
                wait : true
            });
        },

        showItem : function(todoModel) {
            this.itemRegion.show( new TodoDetailItemView({
                model : todoModel
            }));
        },

    });
	return TodoDetailLayoutView;
});
