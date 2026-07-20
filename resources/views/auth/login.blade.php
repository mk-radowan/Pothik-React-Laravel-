@extends('layouts.app')

@section('title', 'Login')

@section('content')
    <div id="login-root" data-login='@json($loginData)'></div>
@endsection

@push('scripts')
    @vite('resources/js/app.js')
@endpush
