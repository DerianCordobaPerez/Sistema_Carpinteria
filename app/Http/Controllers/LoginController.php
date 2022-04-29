<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request){

        $request->validate([
            'email' => ['required'],
            'password' => ['required']
        ]);

        if(Auth::attempt($request->only('email', 'password'))){
            /** @var \App\Models\User **/
            $user = Auth::user();
            return response()->json([
                'token' => $user->createToken('authToken')->plainTextToken,
                'type' => 'Bearer'
            ], 200);
        }

        throw ValidationException::withMessages([
            'email' => [ 'Credenciales incorrectas' ]
        ]);
    }

    public function user(Request $request){
        return response()
            ->json([
                $request->user()
            ], 200);
    }
}
