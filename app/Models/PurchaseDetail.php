<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'model_type',
        'model_id',
        'purchase_id',
        'discount',
        'iva',
        'amount',
        'price'
    ];
}
