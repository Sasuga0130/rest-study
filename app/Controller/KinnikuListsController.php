<?php

App::uses('AppController', 'Controller');

class KinnikuListsController extends AppController {
    public function index() {
$id1 = $this->params['url']['id'];
	
//	$id = $modelId;
//	$id1 = array(2,3);
    //    $res = $this->KinnikuList->findById($id);
//echo $this->action;	
//var_dump($idea);
//if (isset($this->params['url']['id'])) $id = $this->params['url']['id'];
    //    $id1 = $user->findById($id);
//$param = $_GET['url']['id'];
//$param1 = location.search;i
//var_dump($this->params['id']);
	$query = array (
       'conditions' => array(
	'Owner.id' => $id1
//		'Owner.id' => $this->Auth->user()['id']       
			),

	    'fields' => array (
               'KinnikuList.id',
               'KinnikuList.date',
               'KinnikuList.bench',
               'KinnikuList.deadlift',
               'KinnikuList.scwat',
               'KinnikuList.status',
               'Owner.id',
               'Owner.name',
           ),
           'order' => "KinnikuList.id"
       );
	 
       $res = $this->KinnikuList->find('all',$query);
       // 整形
       if (count($res) > 0) {
           $loginUserId = $this->Auth->user()['id'];
           foreach ( $res as $key => $row ) {
               //「ログインユーザがオーナである」フラグ
               $res[$key]['KinnikuList']['owned'] = $row['Owner']['id'] === $loginUserId;
           }
       }
//	$sum = KinnikuList.bench + KinnikuList.scwat;
        $this->set(compact('res'));
        $this->set('_serialize', 'res');
    }

    public function view($id = null) {
        $res = $this->KinnikuList->findById($id);
        $this->set(compact('res'));
        $this->set('_serialize', 'res');
    }

    public function add() {
        $data = $this->request->data;
 $data['owner'] = $this->Auth->user()['id'];        
$res = $this->KinnikuList->save($data);
	 $this->set(compact('res'));
        $this->set('_serialize', 'res');
    }
    public function delete($id) {
        $res = $this->KinnikuList->delete($id, false);
        $this->set(compact('res'));
        $this->set('_serialize', 'res');
    }

    public function edit($id) {
        $this->KinnikuList->id = $id;
        $this->Owner->id = $id;
        $data = $this->request->data;
        $res = $this->KinnikuList->save($this->request->data);
        $res = !empty($res);
        $this->set(compact('res'));
        $this->set('_serialize', 'res');
    }

}
