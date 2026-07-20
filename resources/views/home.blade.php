@extends('layouts.app')

@section('title', 'Home')

@section('content')
    <div id="home-root" data-home='@json($homeData)'></div>

@endsection

@push('scripts')
    @vite('resources/js/app.js')
@endpush
