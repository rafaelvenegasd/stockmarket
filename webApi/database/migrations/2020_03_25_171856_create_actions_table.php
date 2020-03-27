<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actions', function (Blueprint $table) {
            //Id Normal
            $table->bigIncrements('item_id');
            //Name of values / actions / companys
            $table->string('item_name')->unique();
            //The unique code
            $table->string('item_code')->unique();
            //Description
            $table->longText('item_description')->min(2000);
            //The logo
            $table->string('item_logo')->unique();
            //Price current
            $table->double('price_current', 15, 8)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('actions');
    }
}
