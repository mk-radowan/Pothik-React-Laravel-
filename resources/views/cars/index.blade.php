@extends('layouts.app')

@section('title', 'Browse Cars')

@section('content')
    <div id="cars-root" data-cars='@json($carsData)'></div>
@endsection

@push('scripts')
    @vite('resources/js/app.js')
@endpush
