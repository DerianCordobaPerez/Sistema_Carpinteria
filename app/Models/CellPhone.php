<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class CellPhone extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'model_type',
        'model_id',
        'phone_brand_id',
        'number'
    ];

    public function model(): MorphTo
    {
        return $this->morphTo();
    }
}
