<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Portfolio\GetController;
use App\Http\Controllers\Api\Portfolio\ScheduleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* JWT認証導入 */
Route::group(["middleware" => "api"], function () {
/*
    // 認証不要
    Route::post('login', 'App\Http\Controllers\Api\Auth\LoginController@login');
    Route::post('auth/register', 'App\Http\Controllers\Api\Auth\RegisterController@register');
    Route::group(['middleware' => ['jwt.auth']], function () {
        // 認証必要
        Route::post('logout', 'App\Http\Controllers\Api\Auth\LoginController@logout');
        Route::get('accountviewer', 'App\Http\Controllers\Api\Portfolio\GetController@getAccountViewer');
    });
*/
    Route::get('me', 'App\Http\Controllers\Api\AuthController@me');
    Route::post('authenticate', 'App\Http\Controllers\Api\AuthController@authenticate');
    Route::post('schedule', 'App\Http\Controllers\Api\Portfolio\ScheduleController@check');
    Route::get('logout',  'App\Http\Controllers\Api\AuthController@logout')->middleware('jwt.refresh');
    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::resource('accountviewer', 'GetController@getAccountViewer');
        //Route::get('me', 'App\Http\Controllers\Api\AuthController@getCurrentUser');
    });
});

