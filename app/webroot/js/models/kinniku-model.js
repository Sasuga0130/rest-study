//Todoデータ１件を表すモデル
define(function() {
	var KinnikuModel = Backbone.Model.extend({
		urlRoot : '/rest-study/kinniku_lists',
		parse : function(response) {
			//モデルをパース
			console.log("モデルをパース");
			console.log(response);
		           var parsed = response.KinnikuList;
           if (response.Owner) {
               parsed.Owner = response.Owner;
           }
           return parsed;
		},
		
	});
	return KinnikuModel;
});
