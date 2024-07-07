<?php

use App\Http\Controllers\LoginController;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/login',  [LoginController::class, 'authenticate']);
// Route::post('/login', function (Request $request) {
//     return response()->json(['request' => $request], 200);
// });

Route::post('/createTestUser', function (Request $request) {
    $user = new User();
    $user->name = 'test';
    $user->password = Hash::make('password');
    $user->email = 'test@example.com';
    $user->save();

    return response()->json(['message' => 'Test user created successfully!'], 201);
});

Route::get('/ping', function (Request $request) {
    return phpinfo();
});

Route::get('/ping_debug', function (Request $request) {
    /** @disregard xdebug_info is part of xdebug and works fine when xdebug is installed */
    return xdebug_info();
});
