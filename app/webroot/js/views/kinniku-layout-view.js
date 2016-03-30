//Todo一覧表示用レイアウトビュー
define(function(require){
	var KinnikuCompositeView = require('views/kinniku-composite-view');
	var KinnikuCollection = require('collections/kinniku-collection');
 var UserCollection = require('collections/user-collection');
var LoginModel = require('models/user-model');

	var KinnikuLayoutView = Marionette.LayoutView.extend({       
// テンプレート
        template: '#kinniku-layout-template',

        regions : {
            listRegion : '#kinniku-lists',
        },

	
        onRender : function() {
        //alert(Owner.id);  
var id1=3;
    var kinnikuCollection = new KinnikuCollection(); 
   this.listenTo(kinnikuCollection , 'reset', this.showKinnikuList, this);
            kinnikuCollection.fetch({
	data : {id: id1},
	reset : true
	
	});
	       
},

        showKinnikuList : function(kinnikuCollection){
//	if(!this.model.attributes.owned){
	 this.listRegion.show( new KinnikuCompositeView({
                collection : kinnikuCollection
            }));
//	}
	
        },

    });
	return KinnikuLayoutView;
})
