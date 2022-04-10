<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SupplierSeller extends Model
{
    use HasFactory;

    public function person(){
        return $this->morphOne(
            Person::class,
            'model'
        );
    }

    public function cellphones(){
        return $this->morphMany(
            CellPhone::class,
            'model'
        );
    }
}
