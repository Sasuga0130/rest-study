define(function(require){
	var FooterCompositeView = require('views/footer-composite-view');
	var UserCollection = require('collections/user-collection');

	var FooterLayoutView = Marionette.LayoutView.extend({
	//	テンプレート
		template: '#footer-layout-template',

		regions : {
			listRegion : '#footer-lists',
		},

		onRender : function(){
			var userCollection = new UserCollection();
			this.listenTo(userCollection , 'reset', this.showUserList, this);
			userCollection.fetch({reset : true});
		},

		showUserList : function(userCollection){
			this.listRegion.show( new FooterCompositeView({
				collection : userCollection
			}));
		},

	});
	return FooterLayoutView;
});
