@extends('layouts.app')

@section('title', 'Booking History')

@section('content')
    <div id="customer-history-root" data-history='@json($historyData)'></div>
@endsection

@push('scripts')
    @vite('resources/js/app.js')
@endpush