<?php

namespace Tests\Feature\Services;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Services\UserViewerService;

class UserViewerServiceTest extends TestCase
{
    public $Serv;

    /**
     * construct
     *
     * @return void
     */
    function __construct()
    {
        parent::__construct();
        $this->Serv = new UserViewerService();
    }


    /**
     * test getter.
     *
     * @return void
     */
    public function testGetter()
    {
        $res = $this->Serv->getter();
        $this->assertEquals($res[0]['id'], 1);
    }
}
