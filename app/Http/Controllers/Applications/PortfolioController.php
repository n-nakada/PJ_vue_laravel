<?php

namespace App\Http\Controllers\Applications;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PortfolioController extends Controller
{
    public function Init()
    {
        return view('spa/portfolio');
    }

    public function Login(Request $request): array
    {
        return ['account' => $request->account, 'token' => 'server token'];
    }
}
