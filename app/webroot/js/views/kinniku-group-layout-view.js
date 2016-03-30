
//Todo一覧表示用レイアウトビュー
define(function(require){
	var KinnikuGroupCompositeView = require('views/kinniku-group-composite-view');
	var KinnikuCollection1 = require('collections/kinniku-collection');
 var UserCollection1 = require('collections/user-collection');
	var KinnikuGroupLayoutView = Marionette.LayoutView.extend({       
// テンプレート
        template: '#kinniku-group-layout-template',

        regions : {
            listRegion : '#kinniku-item',
        },

        onRender : function() {
           this.userCollection1 = new UserCollection1();
           this.listenTo(this.userCollection1, 'reset', this.onLoadUsers, this);
           this.userCollection1.fetch({reset : true});
       },

       onLoadUsers : function(userCollection1) {
            var kinnikuCollection1 = new KinnikuCollection1();
            this.listenTo(kinnikuCollection1 , 'reset', this.showKinnikuList1, this);
            kinnikuCollection1.fetch({reset : true});
        },

        showKinnikuList1 : function(kinnikuCollection1){
            this.listRegion.show( new KinnikuGroupCompositeView({
                collection : kinnikuCollection1,
		  userList : this.userCollection1.models
            }));
	},
   });
	return KinnikuGroupLayoutView;
})
/*
//詳細画面用レイアウトビュー
define(function(require) {
    var KinnikuGroupItemView = require('views/kinniku-group-item-view');
    var KinnikuModel = require('models/kinniku-model');

	var KinnikuGroupLayoutView = Marionette.LayoutView.extend({
		//テンプレート
		template : '#kinniku-group-layout-template',

		regions : {
			itemRegion : '#kinniku-item',
		},

		onRender : function() {
			var kinnikuModel = new KinnikuModel({
              
            });
			//モデルのサーバからのデータ取得完了時、描画を行う
			this.listenTo(kinnikuModel, 'sync', this.showItem, this);
		//	サーバからデータ取得
			kinnikuModel.fetch({
				wait : true
			});
		},

		showItem : function(kinnikuModel) {
			this.itemRegion.show( new KinnikuGroupItemView({
				model : kinnikuModel
			}));
		},

	});
	return KinnikuGroupLayoutView;
});
*/
