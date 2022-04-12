<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Person extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'firstname',
        'lastname',
        'model_type',
        'model_id',
    ];

    public function model(): MorphTo
    {
        return $this->morphTo();
    }
}
