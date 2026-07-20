@extends('layouts.app')

@section('title', 'Dashboard')

@section('content')
    <div id="customer-dashboard-root" data-dashboard='@json($dashboardData)'></div>
@endsection

@push('scripts')
    @vite('resources/js/app.js')
@endpush