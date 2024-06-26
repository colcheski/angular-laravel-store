<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function() {
    return "<h1>Hello, world!</h1>";
});

Route::get('/message', function () {
    return response()->json(['message' => "It's me, da murph!"]);
});
