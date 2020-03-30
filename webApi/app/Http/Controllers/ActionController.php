<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

use App\Price;

use Carbon\Carbon;

use App\Action;

class ActionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Action::all();
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
        //Instantiated the Action class
        $action = new Action;
        //We declare the name with the name sent in the request
        $action->item_name = $request->item_name;
        $action->item_code = $request->item_code;
        $action->item_description = $request->item_description;
        $action->item_logo = $request->item_logo;
        $action->price_current = null ;
        //We save the change in our modelS
        $action->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    //This is my function show
    public function show($data)
    {
        if ($data == "topactualprices") {
            $top=[];
            $actions = DB::table('actions')->get();
            foreach ($actions as $action)
            {
                $actualPrices = Price::where('item_id', $action->item_id)->orderBy('date')->get();
                
                foreach($actualPrices as $actualPrice){

                }

            }
            return $top;
        } else {
            if(is_numeric ( $data ))
            {
                //If you search by id
                return Action::where('item_id', $data)->get();
            }else {
                // We ask the model for the Action with the name requested by GET.
                return Action::where('item_name', $data)->get();
            }
        }
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
