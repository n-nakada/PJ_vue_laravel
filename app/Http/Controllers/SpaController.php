<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    // 初画面表示
    public function portfolio()
    {
        return view('spa/portfolio');
    }

    public function Hello(): array
    {
        return ['message' => 'Hello World.'];
    }

    public function Login(Request $request): array
    {
        return ['account' => $request->userId, 'token' => 'server token'];
    }
}
