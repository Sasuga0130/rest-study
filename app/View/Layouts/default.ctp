<!DOCTYPE html>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
 <!-- Bootstrap CSS -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Application CSS -->
    <link href="css/app.css" rel="stylesheet">

<title>阪大IHC筋トレ管理</title>
</head>
<body>
   <!-- ヘッダ -->
   
   <div id="header" class="container"></div>
<!-- コンテンツ -->
   <div id="main" class="container">
   </div>
 <div id="footer"></div>
     <!-- ヘッダのテンプレート -->
<script type="text/template" id="header-template">
        <div>
            <div class="row header">
                <div class="form-group col-xs-12">
                    <form class="form-inline pull-right">
                        <label for="logout">ユーザー：<%- name %></label>
                        <input type="button" class="btn btn-default btn-sm" id="logout" value="ログアウト">
                    </form>
                </div>
            </div>
        </div>
    </script> 
   <!-- TODO一覧表示のテンプレート -->
   <script type="text/template" id="kinniku-layout-template">

   <h1>大阪大学アイスホッケー部筋トレ管理</h1>
	<div class= "main_img"></div>
      <div id="kinniku-lists"></div>

   </script>
   <!-- TODO一覧表示のテンプレート -->
   <script type="text/template" id="kinniku-composite-template">
<form action="cgi-bin/example.cgi" method="post">
<p></p>
  <p class="doit">日付:
  <input type="date" id="dat">
</form>
</p>
  <form action="cgi-bin/formmail.cgi" method="post">
<p class="doit">ベンチプレス：
<select id ="ben">
  <option value="40">40kg</option>
  <option value="45">45kg</option>
  <option value="50">50kg</option>
  <option value="55">55kg</option>
  <option value="60">60kg</option>
  <option value="65">65kg</option>
  <option value="70">70kg</option>
  <option value="75">75kg</option>
  <option value="80">80kg</option>
  <option value="85">85kg</option>
  <option value="90">90kg</option>
</select></p>

<form action="cgi-bin/formmail.cgi" method="post">
<p class="doit">デッドリフト：
  
<select id ="dead">
  <option value="60">60kg</option>
  <option value="65">65kg</option>
  <option value="70">70kg</option>
  <option value="75">75kg</option>
  <option value="80">80kg</option>
  <option value="85">85kg</option>
  <option value="90">90kg</option>
  <option value="95">95kg</option>
  <option value="100">100kg</option>
  <option value="105">105kg</option>
  <option value="110">110kg</option>
</select></p>
<form action="cgi-bin/formmail.cgi" method="post">
<p class="doit">スクワット：
  
<select id ="scw">
  <option value="60">60kg</option>
  <option value="65">65kg</option>
  <option value="70">70kg</option>
  <option value="75">75kg</option>
  <option value="80">80kg</option>
  <option value="85">85kg</option>
  <option value="90">90kg</option>
  <option value="95">95kg</option>
  <option value="100">100kg</option>
  <option value="105">105kg</option>
  <option value="110">110kg</option>
  <option value="115">115kg</option>
  <option value="120">120kg</option>
  <option value="125">125kg</option>
  <option value="130">130kg</option>
</select></p>
<input type="button" class="btn btn-warning back-button" id="addKinniku" value="追加">

<hr> 
   <div class="form-group col-sm-12">
<p>
<a class="man-link" href="#kinniku-lists/group">
                    <input type="button" class="btn btn-warning kinniku-button" href="#kinniku-list/group" value="個人ページ"></input></a>
                
へ移動する</p></div>
<div>
       <table border="1" width="350px">
           <tbody></tbody>
       </table>
   </div>
   </script>
   <!-- TODO一行分のテンプレート（上のtbody部分に挿入される） -->
   <script type="text/template" id="kinniku-item-template">
 
      

     
   </script>

<!-- 個人画面のレイアウトテンプレート -->

	<script type="text/template" id="kinniku-detail-layout-template">
	<h1>マイページ</h1>
	<div id="man-item"></div>

	</script>
<!-- 個人一覧表示のテンプレート -->
<script type="tevt/template" id="kinniku-detail-composite-template">
<div class="row">
	<div class="col-xs-12">
		<table class="table table-striped table-bordered table-hover">
		   <thead>
			<tr class="success">
				<th class="col-xs-4">日付</th>
     
				<th class="col-xs-2">ベンチプレス</th>
				<th class="col-xs-2">デッドリフト</th>
				<th class="col-xs-2">スクワット</th>
				
				<th class="col-xs-2"></th>
			</tr>
		</thead>
	<tbody></tbody>
	</table>
	</div>
   	<a class="man-link" href="#kinniku-lists/group">
	<input type="button" class="btn btn-default btn-sm" href="#kinniku-list/group" value="戻る"></input</a>
</div>
   </script>
<!-- 個人画面の表示内容テンプレート -->
	<script type="text/template" id="kinniku-detail-item-template">
<td style="margin:0px">
   
       <span class="kinniku-edit" style="margin:0px">
    <%- date %> </span>
</td>
   <td>
      <%- bench %>
   </td>

   

    <td>
       <%- deadlift %>
   </td>
   <td>
    <%- scwat %>
   </td>
<td class="text-center">
            <div class="btn-group">
  
       <a class="remove-link" href="#kinniku-lists/group">削除</a>
</div>
        </td>
</script>
	<script type="text/template" id="footer-layout-template">
	<h1>メンバー</h1>
<div id="footer-lists"></div>

<a class="man-link" href="#kinniku-lists">
                    <input type="button" class="btn btn-default btn-sm" href="#kinniku-list" value="戻る"></input></a>
                
	</script>
<!--フッダーノ伝プレ -->

	<script type="text/template" id="footer-composite-template">
<div>
		<table>
			<tbody></tbody>
		</table>
	</div>             
	</script>
	<script type="text/template" id="footer-item-template">
 

      
<p class="doit"><span>・</span>
<a class="man-link" href="#kinniku-lists/<%- id %>"><%- name %></a></p>
</script>

   <!-- ログイン画面テンプレート -->
    <script type="text/template" id="login-layout-template">
<h1>大阪大学アイスホッケー部筋トレ管理</h1>       
 <form role="form">
            <h2>ログイン</h2>
            <div class="row">
                <div class="col-xs-1">
                </div>
                <div class="form-group col-xs-5">
                    <label for="username">ユーザ名</label>
                    <input class="form-control" type="text" id="username" placeholder="username" autofocus></input>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-1">
                </div>
                <div class="form-group col-xs-5">
                    <label for="password">パスワード</label>
                    <input class="form-control" type="password" id="password" placeholder="password"></input>
                </div>
                </div>
            <div class="row">
                <div class="col-xs-1">
                </div>
                <div class="form-group col-xs-12">
                    <input type="button" class="btn btn-success todo-action-button" id="login" value="ログイン"></input>
                </div>
            </div>
        </form>
        <form role="form">
            <h2>ユーザ登録</h2>
            <div class="row">
                <div class="col-xs-1">
                </div>
                <div class="form-group col-xs-5">
                    <label for="username">ユーザ名</label>
                    <input class="form-control" type="text" id="signup-username" placeholder="username"></input>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-1">
                </div>
                <div class="form-group col-xs-5">
                    <label for="password">氏名</label>
                    <input class="form-control" type="text" id="signup-name" placeholder="name"></input>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-1">
                </div>
                <div class="form-group col-xs-5">
                    <label for="password">パスワード</label>
                    <input class="form-control" type="password" id="signup-password" placeholder="password"></input>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-1">
                </div>
                <div class="form-group col-xs-12">
                    <input type="button" class="btn btn-warning todo-action-button" id="signup" value="登録"></input>
                </div>
            </div>
        </form>
    </script>

   <!-- require -->
   <script type="text/javascript" src="js/require-config.js"></script>
   <script type="text/javascript" src="js/lib/require.js" data-main="main.js"></script>

</body>
</html>


