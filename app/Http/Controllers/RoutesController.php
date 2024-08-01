<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RoutesController extends Controller
{
    function Mono(){
        
        return view("Mono");

    }
    function LKA(){
        
        return view("LaKatzxAugarten");

    }
    function LK(){
        
        return view("lakatz");

    }
    function tSehne(){
        
        return view("tsehne");

    }
}
