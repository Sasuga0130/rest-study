
//Todo一覧の1件表示用ビュー
define(function(require) {
 var UserModel = require('models/user-model');
 var KinnikuItemView = Backbone.Marionette.ItemView.extend({  
//      DOMに要素追加のタグ名
          
    //    tagName : 'tr',

    //    テンプレート
        template : '#kinniku-item-template',
/*
       ui : {
	//    kinniukuEdit : '.kinniku-edit',         
           removeLink : '.remove-link'
       },
	events : {
          // 削除ボタンクリック時
 'click @ui.removeLink' : 'onRemoveClick',
	},

       onRemoveClick : function() {
           this.model.destroy({
               wait : true
           });
       },

       onRender : function() {
      
       
	 if (!this.model.attributes.owned) {
      //         オーナでない場合は削除リンク非表示
               this.ui.removeLink.css({
                   display : 'none'
               });

	  }
	
      }
     */
  });  
	return KinnikuItemView;
});
