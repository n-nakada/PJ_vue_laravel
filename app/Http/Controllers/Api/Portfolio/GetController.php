<?php

namespace App\Http\Controllers\Api\Portfolio;

use App\Http\Controllers\Controller;
use App\Services\UserViewerService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class GetController extends Controller
{
    private $Sv;

    /**
     * construct
     *
     * @return void
     */
    function __construct()
    {
        $this->Sv = new UserViewerService();
    }


    /**
     * test getter.
     *
     * @return void
     */
    public function getAccountViewer()
    {
        $res = $this->Sv->getter();
        return new JsonResponse($res);
    }
}
