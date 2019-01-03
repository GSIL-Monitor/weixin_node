<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class GetData extends CI_Controller {
    public function index() {
        $this->json([
            'code' => 0,
            'data' => 1
        ]);
    }
}