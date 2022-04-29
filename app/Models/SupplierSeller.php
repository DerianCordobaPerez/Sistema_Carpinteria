<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class SupplierSeller extends Model
{
    use HasFactory;

    protected $fillable = [
        'supplier_id',
    ];

    public function person(): MorphOne
    {
        return $this->morphOne(
            Person::class,
            'model'
        );
    }

    public function cellphones(): MorphMany
    {
        return $this->morphMany(
            CellPhone::class,
            'model'
        );
    }
}
