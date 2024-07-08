<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    /**
     * Handle an authentication attempt.
     */
    public function authenticate(Request $request): JsonResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
 
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return response()->json([
                'success' => 'true',
                'message' => 'Authentication successful',
                'user' => Auth::user(),
            ]);
        }
 
        return response()->json(['message' => 'Unauthorized'], 401);
    }

    public function logout(Request $request): JsonResponse
    {
        Auth::logout(); 
        $request->session()->invalidate();     
        $request->session()->regenerateToken();

        return response()->json([
            'success' => 'true',
            'message' => 'Logout successful',            
        ]);
    }
}
