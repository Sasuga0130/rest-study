define(function(require) {
	var KinnikuDetailItemView = require('views/kinniku-detail-item-view');

	var KinnikuDetailCompositeView = Marionette.CompositeView.extend({
		template: '#kinniku-detail-composite-template',

		childView : KinnikuDetailItemView,

		childViewContainer : 'tbody',
/*
		ui : {
			addTodo : '#addTodo',
			newTodo : '#new-todo'
		},

		initialize: function(){
			_.bindAll( this, 'onCreatedSuccess' );
		},

		onCreateTodo : function() {
			this.collection.create(this.newAttributes(), {
		          silent:  true ,
		          success: this.onCreatedSuccess
			});
			this.ui.newTodo.val('');
		},

		newAttributes : function() {
			return {
				todo : this.ui.newTodo.val().trim(),
				status : 0
			};
		},

		onCreatedSuccess : function(){
			this.collection.fetch({ reset : true });
		},
*/
	});

	return KinnikuDetailCompositeView;
});
