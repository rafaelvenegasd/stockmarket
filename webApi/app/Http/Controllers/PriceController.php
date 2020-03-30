<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Price;

use Illuminate\Support\Facades\DB;

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
        //Object with the actual date
        $now = new Carbon;
        //This is a query for take all the prices from 1 year
        $price = DB::table('prices')
        ->where('date','<', $now)
        ->where('date','>', Carbon::now()->subYears(1))
        ->orderBy('date')
        ->get();
        //List all prices registered for a date range (maximum 1 year)
        $priceSend = [];
        foreach ($price as $jsonPrice) {
            $date= explode(" ", $jsonPrice->date);
            if(count($date) == 2) {
                $jsonDate = [
                    'year' => $date[0],
                    'hour' => $date[1],
                ];
                
            }
            else {
                $jsonDate = "Error";
            }
            $json = [
                'price_id' => $jsonPrice->price_id,
                'item_id' => $jsonPrice->item_id,
                'price_quantity' => $jsonPrice->price_quantity,
                'date' => $jsonDate,
            ];
            array_push($priceSend , $json);
        }
        return $priceSend;
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
        $toSave = str_replace("T", " ", $toSave);
        $toSave = str_replace("Z", "", $toSave);
        $toSave = str_replace('"', "", $toSave);
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
        //Object with the actual date
        $now = new Carbon;
        //List all prices registered for a date range (maximum 1 year)
        $price = Price::where('item_id', $item_id)
        ->where('date','<', $now)
        ->where('date','>', Carbon::now()->subYears(1))
        ->orderBy('date')
        ->get();
        $priceSend = [];
        foreach ($price as $jsonPrice) {
            $date= explode(" ", $jsonPrice->date);
            $jsonDate = [
                'year' => $date[0],
                'hour' => $date[1],
            ];
            $json = [
                'price_id' => $jsonPrice->price_id,
                'item_id' => $jsonPrice->item_id,
                'price_quantity' => $jsonPrice->price_quantity,
                'date' => $jsonDate,
            ];
            array_push($priceSend , $json);
        }
        return $priceSend;
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
