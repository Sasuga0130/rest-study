//詳細ビュー
define(function() {
	var KinnikuDetailItemView = Marionette.ItemView.extend({
	tagName : 'tr',
	//	テンプレート
		template: "#kinniku-detail-item-template",

		ui : {
	removeLink : '.remove-link',	
		cancelButton : '#updateCancel2'
		},

//		DOMイベントハンドラ設定
		events : {
		//	キャンセルボタンクリック時
	'click @ui.removeLink' : 'onRemoveClick',	
		'click @ui.cancelButton' : 'onCancelClick',
		},
/*initialize: function(){
			_.bindAll( this, 'onSaveSuccess' );
		},*/
//		キャンセルボタンクリックのイベントハンドラ
		onCancelClick : function() {
			this.backKinnikuLis();
		},
/*
onSaveSuccess : function() {
			this.backKinnikuLis();
		},*/
	onRemoveClick : function() {
			this.model.destroy({
				wait : true
			});
		},

	//	TODOリスト画面に戻る
		backKinnikuLis : function() {
			Backbone.history.navigate('#kinniku-lists', true);
		},

       onRender : function() {
      //  alert(id);  
	 if (!this.model.attributes.owned) {
      //         オーナでない場合は削除リンク非表示
               this.ui.removeLink.css({
                   display : 'none'
               });

	  }
	
      }
     
	});
	return KinnikuDetailItemView;
});
