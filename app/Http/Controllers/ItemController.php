<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        //
        $items = Item::all();

        return Inertia::render('items/index', ['items' => $items]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('items/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $item = $request->validate([
            'name' => 'required',
            'qty' => 'required'
        ]);

        Item::create($item);
        return redirect()->route('items.index')->with('success');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Item $item)
    {
            return Inertia::render('items/edit',['item'=>$item]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $item)
    {
        $data=$request->validate([
            'name'=>'required',
            'qty'=>'required'
        ]);

        $item->update($data);
        return redirect()->route('items.index')->with('success');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
       $item->delete();
       return redirect()->route('items.index')->with('success');
    }
}
