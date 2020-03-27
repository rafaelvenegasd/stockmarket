<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prices', function (Blueprint $table) {
            //Id Normal
            $table->bigIncrements('price_id');
            //Id values / actions / companys
            $table->unsignedBigInteger('item_id');
            //Reference
            $table->foreign('item_id')->references('item_id')->on('actions');
            //Actual Price
            $table->double('price_quantity', 15, 8);
            //Date 
            $table->text('date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prices');
    }
}
