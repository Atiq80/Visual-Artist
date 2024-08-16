<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class MailController extends Controller
{
    function SendEmail(Request $request)
    {

       $request->validate([
            'name'=>'required | min:3 | max:15',
            'message'=>'required | min:10',
            'email'=>'required | email' 
        ]);



        $to = "work.special.vidz@gmail.com";
        $name = $request->name;
        $msg = $request->message;
        $email = $request->email;
        
        try {
            Mail::to($to)->send(new ContactMail($msg, $name, $email));
            return response()->json([
                'success' => true,
                'message' => 'Thank you for contacting us!'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error sending email: ' . $e->getMessage()
            ], 500);
        }
    }
}