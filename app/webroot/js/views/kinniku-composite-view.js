//Todo一覧表示用ビュー
define(function(require) {
	var KinnikuItemView = require('views/kinniku-item-view');

    var KinnikuCompositeView = Marionette.CompositeView.extend({
        template: '#kinniku-composite-template',

        childView : KinnikuItemView,

      //  childViewContainer : 'tbody',

        ui : {
            addKinniku : '#addKinniku',
	    dat : '#dat',
	    ben : '#ben',
	    scw : '#scw',
	    dead : '#dead',
//             userList : '#user-list'
        },

        events : {
            'click @ui.addKinniku' : 'onCreateKinniku',
        },
/*
               initialize: function(options){
            _.bindAll( this, 'onCreatedSuccess' );
           this.userList = options.userList;
        },

       onRender : function() {
         //  ユーザ一覧を表示
           this.showUserList(this.ui.userList, this.userList);
          // ログインユーザをデフォルトで選択状態にする
           this.ui.userList.val(window.application.loginUser.id);
       },
                   
     //  ユーザ一覧を表示
       showUserList : function($list, userList){
           $.each(userList, function(index, userModel) {
               $list.append(
                   "<option value='" 
                   + userModel.attributes.id + "'>"
                   + userModel.attributes.name + "</option>");
           });
       },           
*/
        onCreateKinniku : function() {
            this.collection.create(this.newAttributes(), {
                  silent:  true ,
  //                success: this.onCreatedSuccess
            });
            this.ui.dat.val('');
            this.ui.ben.val('');
            this.ui.dead.val('');
            this.ui.scw.val('');
        },

        newAttributes : function() {
            return {
                date : this.ui.dat.val().trim(),
                bench : this.ui.ben.val().trim(),
                deadlift : this.ui.dead.val().trim(),
                scwat : this.ui.scw.val().trim(),
                status : 0
            };
        },

  /*      onCreatedSuccess : function(){
            this.collection.fetch({ reset : true });
        },
*/
    });
	return KinnikuCompositeView;
});
