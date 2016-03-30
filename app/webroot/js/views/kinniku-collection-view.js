var app = app || {};

//Todo一覧表示用ビュー
(function(app) {
    app.KinnikuCollectionView = Backbone.View.extend({
              el : '#content',
       tagName : 'div',

	 kinnikuCollection : {},
        initialize : function() {
            this.kinnikuCollection = new app.KinnikuCollection()
	               this.kinnikuCollection.on('add', this.addOne, this);
           this.$el.html($('#list-template').html());
        this.dat = this.$('#dat');
	this.ben = this.$('#ben');
	this.scw = this.$('#scw');
	this.dead = this.$('#dead');    
	this.render();
        },
       events : {
           'click #addKinniku' : 'onCreateKinniku',
       },
        render : function() {
            this.kinnikuCollection.fetch();
            return this;
        },
       onCreateKinniku : function(e) {
           this.kinnikuCollection.create(this.newAttributes(), {
               wait : true
           });
           this.dat.val('');
	   this.ben.val('');
	   this.dead.val('');
	   this.scw.val('');
           this.kinnikuCollection.fetch();
       },
       addOne : function(bench) {
           var itemView = new app.KinnikuItemView({
               model : bench
           });
           $('#kinniku-lists').append(itemView.render().el);
       },
       newAttributes : function() {
           return {
	       date : this.dat.val().trim(),
               bench : this.ben.val().trim(),
               deadlift : this.dead.val().trim(),
	       scwat : this.scw.val().trim(),
               status : 0
           }
       }
    })
})(app);
