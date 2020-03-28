<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Price;

use App\Action;

use Carbon\Carbon;

class PriceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Date now
        $now = new Carbon;
        $toSave = json_encode($now);
        //Instantiated the Price class
        $price = new Price;
        //We declare the name with the name sent in the request
        $price->item_id = $request->item_id;
        $price->price_quantity = $request->price_quantity;
        $price->date = $toSave;
        //price_current update
        Action::where('item_id', $request->item_id)->update(['price_current' => $request->price_quantity]);
        //We save the change in our modelS
        $price->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($item_id)
    {   
        //Here i need to create a good query for obtain only 
        $prueba = Price::where('item_id', $item_id)->orderBy('date')->get(); 
        return $prueba;
        //return $action[0]->item_id;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
