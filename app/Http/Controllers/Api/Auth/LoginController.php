<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    private $authManager;

    public function __construct(AuthManager $authManager)
    {
        $this->authManager = $authManager;
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request): JsonResponse
    {
        $guard = $this->authManager->guard('api');
        $token = $guard->attempt([
            'email' =>  $request->get('email'),
            'password'  =>  $request->get('password'),
        ]);
        if (!$token) {
            return new JsonResponse(['error' => 'Unauthorized'], 401);
        }
        return new JsonResponse($token);
    }

    public function getUser(): JsonResponse
    {
        $user = Auth::user();
        if (!$user) {
            return new JsonResponse(__('auth.failed'));
        }
        return new JsonResponse($user);
    }

    public function logout(): JsonResponse
    {
        $guard = $this->authManager->guard('api');
        $guard->logout();
        return new JsonResponse(__('auth.logout'));
    }
}

