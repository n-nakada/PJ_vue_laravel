<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRegistPost;
use App\Services\UserRegisterService;
use Illuminate\Http\JsonResponse;
use Illuminate\Auth\Events\Registered;

class RegisterController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(UserRegisterService $service)
    {
        $this->middleware('guest');
        $this->service = $service;
    }

    /**
     * register
     *
     * @param  UserRegistPost
     * @return JsonResponse
     */
    public function register(UserRegistPost $request): JsonResponse
    {
        event(
            new Registered(
                $user = $this->service->userRegisterTransaction(
                    $request->all()
                )
            )
        );
        if (!$user) {
            return new JsonResponse('Error');
        }
        return new JsonResponse($user);
    }
}

