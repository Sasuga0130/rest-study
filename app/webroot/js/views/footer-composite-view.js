define(function(require) {
	var FooterItemView = require('views/footer-item-view');

	var FooterCompositeView = Marionette.CompositeView.extend({
		template: '#footer-composite-template',

		childView : FooterItemView,

		childViewContainer : 'tbody',
/*
		ui : {
			addTodo : '#addTodo',
			newTodo : '#new-todo'
		},

		events : {
			'click @ui.addTodo' : 'onCreateTodo',
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
	return FooterCompositeView;
});
