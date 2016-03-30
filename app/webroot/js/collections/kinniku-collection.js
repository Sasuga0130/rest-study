define(function(require) {
	var KinnikuModel = require('models/kinniku-model');

	var KinnikuCollection = Backbone.Collection.extend({
		url : '/rest-study/kinniku_lists.json',
		model : KinnikuModel,

		parse : function(response) {
	//		コレクションをパース
			console.log("コレクションをパース");
			return response;
		}
	});
	
	return KinnikuCollection;
});
