<?php
App::uses('AppController', 'Controller');

class TodoListsController extends AppController {
   private $fields = array (
       'TodoList.id',
       'TodoList.todo',
       'TodoList.status',
       'Owner.id',
       'Owner.name',
       'Assignee.id',
       'Assignee.name'
   );
    public function index() {
              $query = array (
           'fields' => $this->fields,
           'order' => "TodoList.id"
       );
       $res = $this->TodoList->find('all', $query);
      //  整形
       if (count($res) > 0) {
           $loginUserId = $this->Auth->user()['id'];
           foreach ( $res as $key => $row ) {
          //     「ログインユーザがオーナである」フラグ
               $res[$key]['TodoList']['owned'] = $row['Owner']['id'] === $loginUserId;
        //       「ログインユーザが担当である」フラグ
               $res[$key]['TodoList']['assigned'] = $row['Assignee']['id'] === $loginUserId;
           }
       }
        $this->set(compact('res'));
        $this->set('_serialize', 'res');
    }

    public function view($id = null) {
        $res = $this->TodoList->findById($id, $this->fields);
        $this->set(compact('res'));
        $this->set('_serialize', 'res');
    }

    public function add() {
        $data = $this->request->data;
        $data['owner'] = $this->Auth->user()['id'];
        $res = $this->TodoList->save($data);
        $response = $this->editResponse($res);
       $this->set(compact('response'));
       $this->set('_serialize', 'response');
    }
    public function delete($id) {
     //     オーナかどうかチェック
       if(!$this->TodoList->isOwner($id)){
           $this->setStatusValidationError();
           $response = $this->editErrors('オーナのみ削除可能です。');
       }else{
           $res = $this->TodoList->delete($id, false);
           $response = $this->editResponse($res);
       }
       $this->set(compact('response'));
       $this->set('_serialize', 'response');
    }

    public function edit($id) {
        $this->TodoList->id = $id;
        $data = $this->request->data;
        $res = $this->TodoList->save($this->request->data);
        $res = !empty($res);
       $response = $this->editResponse($res);
       $this->set(compact('response'));
       $this->set('_serialize', 'response');
   }

  // レスポンスを編集
   private function editResponse($res){
       if($res){
           $response = $res;
       }else{
           $this->setStatusValidationError();
           $response = array();

           if(count($this->TodoList->validationErrors) > 0){
               $response = $this->editErrors($this->TodoList->validationErrors);
           }else{
               $response = $this->editErrors('エラーが発生しました。');
           }
       }
       return $response;
   }

  // バリデーションエラー時はレスポンスを400に設定
   private function setStatusValidationError(){
       $this->response->statusCode(400);
   }

  // エラーメッセージを編集
   private function editErrors($errors){
       if(is_array($errors)){
           $res['errors'] = $errors;
       }else{
           $res['errors']  = array('error' => array($errors));
       }
       return $res;
    }

}
