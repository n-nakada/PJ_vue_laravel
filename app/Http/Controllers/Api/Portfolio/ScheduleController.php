<?php

namespace App\Http\Controllers\Api\Portfolio;

use App\Http\Controllers\Controller;
use App\Services\ScheduleService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ScheduleController extends Controller
{
    private $Sv;

    /**
     * construct
     *
     * @return void
     */
    function __construct()
    {
        $this->Sv = new ScheduleService();
    }


    /**
     * スケジュールチェック
     *
     * @return JsonResponse 処理結果
     */
    public function check(Request $request)
    {
        if ($request->check === 'init') {
            $res = $this->Sv->getSchedule();
        } else {
            $res = $this->Sv->checkSchedule();
        }
        return new JsonResponse($res);
    }
}
