<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    // tutorial
    public function tutorial() {
        return view('spa/tutorial');
    }
}
