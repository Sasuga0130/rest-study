define(function(){
	var FooterItemView = Marionette.ItemView.extend({
//		DOMに要素追加のタグ名
		tagName : 'tr',
//		テンプレート
		template : '#footer-item-template',
/*
		ui : {
			checkBox : '.toggle',
			removeLink : '.remove-link'
		},

		DOMイベントハンドラ設定
		events : {
			チェックボックスクリック時
			'click @ui.checkBox' : 'onStatusToggleClick',
			削除ボタンクリック時
			'click @ui.removeLink' : 'onRemoveClick',
		},

		onStatusToggleClick : function() {
			this.model.toggle();
		},

		onRemoveClick : function() {
			this.model.destroy({
				wait : true
			});
		},
*/
	});
	return FooterItemView;
});
