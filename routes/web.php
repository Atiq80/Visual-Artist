<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoutesController;
use App\Http\Controllers\MailController;

Route::get('/', function () {
    return view('index');
});


Route::post("mail", [MailController::class , 'SendEmail'] );

Route::get("/Mono" , [RoutesController::class,'Mono' ] );
Route::get("/LaKatz-x-Augarten" , [RoutesController::class,'LKA' ] );
Route::get("/T-shne" , [RoutesController::class,'tSehne' ] );
Route::get("/LaKatz" , [RoutesController::class,'LK' ] );



