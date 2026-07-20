@extends('layouts.app')

@section('title', 'My Profile')

@section('content')
    <div id="customer-profile-root" data-profile='@json($profileData)'></div>
@endsection

@push('scripts')
    @vite('resources/js/app.js')
@endpush