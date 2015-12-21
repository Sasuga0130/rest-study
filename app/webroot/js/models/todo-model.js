
//Todoデータ１件を表すモデル
define(function() {
    var TodoModel = Backbone.Model.extend({
   // app.TodoModel = Backbone.Model.extend({
        urlRoot : '/rest-study/todo_lists',
        parse : function(response) {
        //    モデルをパース
           console.log("モデルをパース");
            console.log(response);
                       var parsed = response.TodoList;
           if (response.Owner) {
               parsed.Owner = response.Owner;
               parsed.Assignee = response.Assignee;
           }
           return parsed;
       },
       toggle : function() {
           this.set('status', this.get("status") === '1' ? '0' : '1');
           this.save();
       },
       validate : function(attrs) {
           var errors = [];
           
          // 長さチェック
           var todoLength = attrs.todo.length;
           if (todoLength < 1 || todoLength > 200) {
               errors.push('[Client]TODOは1?200文字までで入力して下さい。');
           }

          // 実験！
           if(attrs.todo !== 'hoge'){
               errors.push('[Client]TODOは"hoge"のみ！');
           }

           if (errors.length > 0){
               return errors;
           }else{
               return null;
           }
        }
    });
    return TodoModel;
});
