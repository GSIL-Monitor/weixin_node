<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class HelloWorld extends CI_Controller {
    public function index() {
        //GET的方式
        //$p1 = $this ->input->get('p1');
        //$p2 = $this ->input->get('p2');

        //POST的方式 urkencoded
        // $p1 =  $this ->input->post('p1');
        // $p2 =  $this ->input->post('p2');


        //POST的方式 json
        $pjson = json_decode($this ->input->raw_input_stream,true);


        $this->json([
            'code' => 0,
            'data' => 1,
            //GET的方法
            // 'p1' => $p1,
            // 'p2' => $p2,
            //POST的方法 urlencode
            // 'p1' => $p1,
            // 'p2' => $p2,
            //POST的方法 json
            'p' => $pjson
        ]);
    }
}