<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Supplier extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'direction',
        'email',
        'description'
    ];

    public function sellers(): HasMany
    {
        return $this->hasMany(SupplierSeller::class);
    }
}
