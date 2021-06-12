<?php

namespace Tests\Feature\Services;

use Tests\TestCase;
use App\Services\ScheduleService;
use Illuminate\Support\Facades\Storage;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ScheduleServiceTest extends TestCase
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
        $this->Serv = new ScheduleService();
    }

    /**
     * test getter.
     *
     * @return void
     */
    public function testGet()
    {
        $this->Serv->getSchedule();
        $this->markTestIncomplete('OK');
    }

    /**
     * test getter.
     *
     * @return void
     */
    public function testCheck()
    {
        $res = $this->Serv->checkSchedule();
        $this->assertFalse($res);
    }
}
