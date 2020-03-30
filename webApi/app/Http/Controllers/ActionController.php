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
        //This is for the top of the actions
        if ($data == "topactualprices") {
            //The date actual
            $now = new Carbon;
            //Var i use for send the response
            $top=[];
            //All the actions query for take the actual price of all
            $actions = DB::table('actions')->get();
            //For take all the data of Action
            foreach ($actions as $action)
            {
                $actualPrices = Price::where('item_id', $action->item_id)
                ->where('date','<', $now)
                ->where('date','>', Carbon::now()->subDays(1))
                ->orderBy('date','DESC')
                ->get();
                // --> This is for take the value of the increment (or decrement)
                $count = 0;
                $first = 0;
                $last = 0;

                foreach($actualPrices as $actualPrice){
                    $count = $count + 1;
                    if($count == 1){
                        $first = $actualPrice->price_quantity;
                    }
                    $last = $actualPrice->price_quantity;
                }

                $actualIncrement = 0;

                if ($count == 1) {
                    $actualIncrement = $first;
                }
                if($count > 1){
                    $actualIncrement = $first - $last;
                }

                //For add a increment in a json and ready for send
                $dataReturn = [
                    "item_id" => $action->item_id ,
                    "item_name" => $action->item_name,
                    "item_description" => $action->item_description,
                    "item_logo" => $action->item_logo,
                    "price_current" => $action->price_current,
                    "item_increment" => $actualIncrement,
                ];
                //For put in my variable top, for send my response
                array_push($top , $dataReturn);
            }
            //This is for order a top
            foreach ($top as $key => $row) {
                $aux[$key] = $row['item_increment'];
            }
            array_multisort($aux, SORT_DESC, $top);
            //My top
            return $top;
        } else {
            //This is for searh with id, but exist many options 
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
