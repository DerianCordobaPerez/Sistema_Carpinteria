<?php

use App\Http\Controllers\Suppliers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [ LoginController::class, 'login' ]);
Route::post('/register', [ LoginController::class, 'register' ]);
Route::post('/user', [ LoginController::class, 'user' ]);

Route::prefix('suppliers')->group(function () {
    Route::get('/list', [Suppliers::class, 'list']);
    Route::post('/create', [Suppliers::class, 'create']);
    Route::get('/find/{id}', [Suppliers::class, 'find']);
    Route::put('/update/{id}', [Suppliers::class, 'update']);
    Route::delete('/delete/{id}', [Suppliers::class, 'delete']);
});