//詳細画面用レイアウトビュー
define(function(require) {
    var KinnikuDetailItemView = require('views/kinniku-detail-item-view');
    var KinnikuModel = require('models/kinniku-model');
    var KinnikuDetailCompositeView = require('views/kinniku-detail-composite-view');
//	var LoginView = require('views/login-layout-view');
	var KinnikuCollection = require('collections/kinniku-collection');
	var KinnikuDetailLayoutView = Marionette.LayoutView.extend({
//		テンプレート
		template : '#kinniku-detail-layout-template',

		regions : {
			itemRegion : '#man-item',
		},

/*
		onRender : function(){
		
	var userModel = new UserModel({
				id : this.options.modelId
			});

			userModel.fetch({
				wait : true
			});
*/
		onRender : function() {
/*		
			var kinnikuModel = new KinnikuModel({
			
				id : this.options.modelId
			});*/
/*
//			モデルのサーバからのデータ取得完了時、描画を行う
			this.listenTo(kinnikuModel, 'sync', this.showItem, this);
//			サーバからデータ取得
			kinnikuModel.fetch({
				data : {id:id1},
				wait : true
			});
		
*/
var id1=this.options.modelId;

			var kinnikuCollection = new KinnikuCollection();
			this.listenTo(kinnikuCollection , 'reset', this.showKinnikuDetail, this);
			kinnikuCollection.fetch({
			reset : true,
			data : {id :id1}
	});
	
	},
/*
		showItem : function(kinnikuModel) {
			this.itemRegion.show( new KinnikuDetailItemView({
				model : kinnikuModel
			}));
		},
*/
		showKinnikuDetail : function(kinnikuCollection){
			this.itemRegion.show( new KinnikuDetailCompositeView({
//				model : userModel,
				collection : kinnikuCollection
			}));
		},



	});
	return KinnikuDetailLayoutView;
});
