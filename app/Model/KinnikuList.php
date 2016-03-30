<?php

App::uses('AppModel', 'Model');

class KinnikuList extends AppModel {
   public $belongsTo = array (
       'Owner' => array (
           'className' => 'User',
           'foreignKey' => 'owner',
       )
   );
}
