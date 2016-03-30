define(function(require) {
	var KinnikuGroupItemView = require('views/kinniku-group-item-view');

	var KinnikuGroupCompositeView = Marionette.CompositeView.extend({
		template: '#kinniku-group-composite-template',

		childView : KinnikuGroupItemView,

		childViewContainer : 'tbody',

		initialize: function(){
			_.bindAll( this, 'onCreatedSuccess' );
		},

		onCreatedSuccess : function(){
			this.collection.fetch({ reset : true });
		},

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
	return KinnikuGroupCompositeView;
});
