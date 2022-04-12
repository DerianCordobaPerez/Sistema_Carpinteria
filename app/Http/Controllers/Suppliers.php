<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;

class Suppliers extends Controller
{
    public function list(){
        return Supplier::all();
    }
}
