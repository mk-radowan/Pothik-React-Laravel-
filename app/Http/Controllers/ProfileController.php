<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class ProfileController extends Controller
{
    public function show()
    {
        $user = auth()->user();
        $photoUrl = $user->avatar ? asset('storage/' . $user->avatar) : null;

        $profileData = [
            'userName' => $user->name,
            'email' => $user->email,
            'phone' => $user->phone,
            'roleLabel' => ucfirst($user->role),
            'userPhotoUrl' => $photoUrl,
            'dashboardUrl' => route('dashboard'),
            'historyUrl' => route('bookings.history'),
            'profileUrl' => route('profile'),
            'logoutUrl' => route('logout'),
            'updateUrl' => route('profile.update'),
            'csrfToken' => csrf_token(),
        ];

        return view('customer.profile.index', compact('profileData'));
    }

    public function update(Request $request)
    {
        $user = auth()->user();

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', Rule::unique(User::class, 'email')->ignore($user->id)],
            'phone' => ['required', 'string', 'max:15'],
            'password' => ['nullable', 'string', 'min:6', 'confirmed'],
            'avatar' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
        ]);

        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->phone = $validated['phone'];

        if (!empty($validated['password'])) {
            $user->password = Hash::make($validated['password']);
        }

        if ($request->hasFile('avatar')) {
            if ($user->avatar) {
                Storage::disk('public')->delete($user->avatar);
            }
            $user->avatar = $request->file('avatar')->store('avatars', 'public');
        }

        $user->save();

        return back()->with('success', 'Profile updated successfully.');
    }

    public function storeReview(Request $request, string $carId)
    {
        $validated = $request->validate([
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'comment' => ['required', 'string', 'max:500'],
        ]);

        Review::create([
            'user_id' => auth()->id(),
            'car_id' => $carId,
            'rating' => $validated['rating'],
            'comment' => $validated['comment'],
            'user_name' => auth()->user()->name,
        ]);

        return back()->with('success', 'Review submitted successfully. Thank you!');
    }
}
