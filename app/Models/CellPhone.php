<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CellPhone extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function model(){
        return $this->morphTo();
    }
}
