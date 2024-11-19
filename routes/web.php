<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/items',[ItemController::class,'index'])->name('items.index');
Route::get('/items/create',[ItemController::class,'create'])->name('items.create');
Route::post('/items',[ItemController::class,'store'])->name('items.store');
Route::get('/items/{item}/edit',[ItemController::class,'edit'])->name('items.edit');
Route::put('/items/{item}',[ItemController::class,'update'])->name('items.update');
Route::delete('/items/{item}',[ItemController::class,'destroy'])->name('items.destroy');




Route::get('/blogs',[BlogController::class,'index'])->name('blogs.index');
Route::get('/blogs/create',[BlogController::class,'create'])->name('blogs.create');
Route::post('/blogs',[BlogController::class,'store'])->name('blogs.store');
Route::get('/blogs/{blog}/edit',[BlogController::class,'edit'])->name('blogs.edit');
Route::put('/blogs/{blog}',[BlogController::class,'update'])->name('blogs.update');
Route::delete('/blogs/{blog}',[BlogController::class,'destroy'])->name('blogs.destroy');


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
