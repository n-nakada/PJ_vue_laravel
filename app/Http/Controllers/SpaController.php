<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    // tutorial
    public function portfolio() {
        return view('spa/portfolio');
    }
}
