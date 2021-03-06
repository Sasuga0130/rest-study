<?php
App::uses('BlowfishPasswordHasher', 'Controller/Component/Auth');
class UserFixture extends CakeTestFixture {
    public $import = 'User';
    public $records;
    public function init() {
        $this->records = array (
            array (
                "id" => 1000,
                "username" => "yamada",
                "name" => "yamada",
                "password" => (new BlowfishPasswordHasher())->hash("yamada")
            )
        );
        parent::init();
    }
}
