import React from 'react';
import CustomerLayout from './CustomerLayout';

export default function CustomerProfile({ data }) {
    return (
        <CustomerLayout data={data} active="profile" title="My Profile">
            <div className="row g-3">
                <div className="col-lg-4">
                    <div className="glass-card p-4 text-center" style={{ borderTop: '4px solid #0ea5a4' }}>
                        {data.userPhotoUrl ? (
                            <img
                                src={data.userPhotoUrl}
                                alt="Profile"
                                style={{ width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #99f6e4' }}
                            />
                        ) : (
                            <div style={{ width: '96px', height: '96px', borderRadius: '50%', margin: '0 auto', background: '#ccfbf1', color: '#0f766e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '35px' }}>
                                <i className="bi bi-person"></i>
                            </div>
                        )}
                        <h5 className="mt-3 mb-1">{data.userName}</h5>
                        <p className="text-muted mb-0">{data.roleLabel}</p>
                    </div>
                </div>

                <div className="col-lg-8">
                    <div className="glass-card p-4" style={{ borderTop: '4px solid #0ea5a4' }}>
                        <form method="POST" action={data.updateUrl} encType="multipart/form-data">
                            <input type="hidden" name="_token" value={data.csrfToken} />
                            <input type="hidden" name="_method" value="PUT" />

                            <div className="mb-3">
                                <label className="form-label">Profile Photo</label>
                                <input type="file" name="avatar" accept="image/*" className="form-control" />
                                <small className="text-muted">JPG, PNG, WEBP (max 2MB)</small>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" name="name" defaultValue={data.userName} className="form-control" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" name="email" defaultValue={data.email} className="form-control" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="text" name="phone" defaultValue={data.phone} className="form-control" required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">New Password</label>
                                <input type="password" name="password" className="form-control" placeholder="Leave empty to keep old password" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" name="password_confirmation" className="form-control" />
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ background: '#0ea5a4', borderColor: '#0ea5a4' }}>
                                <i className="bi bi-check2-circle me-2"></i>Update Profile
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
}
