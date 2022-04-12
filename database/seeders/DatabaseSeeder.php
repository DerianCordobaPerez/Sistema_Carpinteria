<?php

namespace Database\Seeders;

use App\Models\Supplier;
use App\Models\SupplierSeller;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(
            PhoneBrandSeeder::class
        );

        // \App\Models\User::factory(10)->create();
        \App\Models\Supplier::factory(5)
            ->has(
                \App\Models\SupplierSeller::factory()
                ->has(
                    \App\Models\People::factory(),
                    'person'
                )
                ->has(
                    \App\Models\CellPhone::factory(),
                    'cellphones'
                )
                ->count(2),
                'sellers'
            )
        ->create();
    }
}
