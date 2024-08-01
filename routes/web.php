<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoutesController;

Route::get('/', function () {
    return view('index');
});

Route::get("/Mono" , [RoutesController::class,'Mono' ] );
Route::get("/LaKatz-x-Augarten" , [RoutesController::class,'LKA' ] );
Route::get("/T-shne" , [RoutesController::class,'tSehne' ] );
Route::get("/LaKatz" , [RoutesController::class,'LK' ] );



