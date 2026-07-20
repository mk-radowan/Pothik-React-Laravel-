import React from 'react';

export default function AuthRegister({ data }) {
    const old = data.old || {};
    const err = data.errors || {};
    const perks = ['Fast booking access', 'Real-time car availability', 'Secure customer account'];

    return (
        <div style={{ background: 'linear-gradient(135deg,#f8f9fa 0%,#fef2f3 100%)', minHeight: '100vh', padding: '32px 0' }}>
            <div className="container py-4 py-md-5">
                <div className="row align-items-center g-4 g-lg-5 justify-content-center">
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="hero-badge mb-3">Join Pothik</div>
                        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: '#1a1a2e', lineHeight: 1.15 }}>Create your customer account</h2>
                        <p className="mt-3 mb-4 text-muted" style={{ lineHeight: 1.7 }}>
                            Register once and start booking cars. Enjoy the benefits of having a secure customer account with us.
                        </p>
                        <div className="d-grid gap-3">
                            {perks.map((perk) => (
                                <div key={perk} className="d-flex align-items-center gap-3">
                                    <div style={{ width: 32, height: 32, background: '#e8192c', borderRadius: '50%', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                                        <i className="bi bi-check text-white" style={{ fontSize: '1rem' }} />
                                    </div>
                                    <span style={{ color: '#374151' }}>{perk}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 col-md-9">
                        <div className="auth-card" style={{ borderRadius: 24, padding: 'clamp(20px, 4vw, 36px)', boxShadow: '0 20px 60px rgba(17, 24, 39, 0.08)' }}>
                            <div className="text-center mb-4">
                                <div style={{ width: 64, height: 64, background: '#fef2f3', borderRadius: '50%', display: 'grid', placeItems: 'center', margin: '0 auto 16px', border: '2px solid rgba(232,25,44,0.2)' }}>
                                    <i className="bi bi-person-plus-fill" style={{ fontSize: '1.8rem', color: '#e8192c' }} />
                                </div>
                                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: '#1a1a2e', marginBottom: 8 }}>Register</h2>
                                <p className="text-muted mb-0">Customer only registration</p>
                            </div>

                            <form method="POST" action={data.registerUrl}>
                                <input type="hidden" name="_token" value={data.csrfToken} />

                                <div className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="name" className="form-label">Full name</label>
                                        <input type="text" id="name" name="name" className={`form-control ${err.name ? 'is-invalid' : ''}`} placeholder="Full name" defaultValue={old.name || ''} autoComplete="name" required />
                                        {err.name && <div className="invalid-feedback">{err.name}</div>}
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" id="email" name="email" className={`form-control ${err.email ? 'is-invalid' : ''}`} placeholder="Email" defaultValue={old.email || ''} autoComplete="email" required />
                                        {err.email && <div className="invalid-feedback">{err.email}</div>}
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input type="tel" id="phone" name="phone" className={`form-control ${err.phone ? 'is-invalid' : ''}`} placeholder="11 digit phone" defaultValue={old.phone || ''} autoComplete="tel" inputMode="numeric" required />
                                        {err.phone && <div className="invalid-feedback">{err.phone}</div>}
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" id="password" name="password" className={`form-control ${err.password ? 'is-invalid' : ''}`} placeholder="Password" autoComplete="new-password" required />
                                        {err.password && <div className="invalid-feedback">{err.password}</div>}
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label htmlFor="password_confirmation" className="form-label">Confirm password</label>
                                        <input type="password" id="password_confirmation" name="password_confirmation" className="form-control" placeholder="Confirm password" autoComplete="new-password" required />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary w-100 mt-4 py-2 fw-semibold">Create customer account</button>
                            </form>

                            <p className="text-center mt-3 mb-0 text-muted small">
                                Already registered? <a href={data.loginUrl}>Login</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
