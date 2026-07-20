@extends('layouts.app')

@section('title', 'Register')

@section('content')
    <div id="register-root" data-register='@json($registerData)'></div>
@endsection

@push('scripts')
    @vite('resources/js/app.js')
@endpush
