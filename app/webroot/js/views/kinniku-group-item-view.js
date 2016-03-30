define(function() {
	var KinnikuGroupItemView = Marionette.ItemView.extend({

//		テンプレート
		template: "#kinniku-group-item-template",


		ui :{
			cancelButton : '#updateCancel1'
		},

//		DOMイベントハンドラ設定
		events : {
			//キャンセルボタンクリック時
			'click @ui.cancelButton' : 'onCancelClick',
		},

	//	初期化
/*		initialize: function(){
			_.bindAll( this, 'onSaveSuccess' );
		},

*/	

//		キャンセルボタンクリックのイベントハンドラ
		onCancelClick : function() {
			this.backKinnikuLists();
		},

//		TODOリスト画面に戻る
		backKinnikuLists : function() {
			Backbone.history.navigate('#kinniku-lists', true);
		}

	});
	return KinnikuGroupItemView;
});
