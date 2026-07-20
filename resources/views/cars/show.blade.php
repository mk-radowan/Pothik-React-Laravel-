@extends('layouts.app')

@section('title', $carDetailsData['car']['display_name'])

@section('content')
    <div id="car-details-root" data-car='@json($carDetailsData)'></div>
@endsection

@push('scripts')
    @vite('resources/js/app.js')
@endpush
