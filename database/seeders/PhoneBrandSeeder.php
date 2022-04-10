<?php

namespace Database\Seeders;

use App\Models\PhoneBrand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PhoneBrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $brands = ['Claro', 'Tigo', 'Cootel'];

        foreach($brands as $brand){
            $phoneBrand = PhoneBrand::where([
                'name' => $brand
            ])->get();
            if(count($phoneBrand) == 0){
                (new PhoneBrand([
                    'name' => $brand
                ]))->save();
            }
        }
    }
}
