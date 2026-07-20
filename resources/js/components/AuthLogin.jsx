import React from 'react';

export default function AuthLogin({ data }) {
    return (
        <div style={{ background: 'linear-gradient(135deg,#f8f9fa 0%,#fef2f3 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80 }}>
            <div className="container py-5">
                <div className="row align-items-center g-5 justify-content-center">
                    <div className="col-lg-5 d-none d-lg-block text-center">
                        <div className="hero-badge mb-3">Welcome Back</div>
                        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: '#1a1a2e' }}>
                            Your Next Adventure<br /><span style={{ color: '#e8192c' }}>Starts Here</span>
                        </h2>
                    </div>

                    <div className="col-lg-5 col-md-8">
                        <div className="auth-card">
                            <h2 className="text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, color: '#1a1a2e' }}>Sign In</h2>
                            <p className="text-center text-muted mb-4">Login to your account</p>

                            <form method="POST" action={data.loginUrl}>
                                <input type="hidden" name="_token" value={data.csrfToken} />
                                <input type="hidden" name="redirect" value={data.redirect || ''} />

                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email" className={`form-control ${data.errors?.email ? 'is-invalid' : ''}`} defaultValue={data.oldEmail || ''} required />
                                    {data.errors?.email && <div className="invalid-feedback">{data.errors.email}</div>}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" name="password" className={`form-control ${data.errors?.password ? 'is-invalid' : ''}`} required />
                                    {data.errors?.password && <div className="invalid-feedback">{data.errors.password}</div>}
                                </div>

                                <div className="mb-3 form-check">
                                    <input type="checkbox" name="remember" className="form-check-input" id="remember" />
                                    <label className="form-check-label" htmlFor="remember">Remember me</label>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>

                            <p className="text-center mt-3 mb-0 text-muted">
                                New here? <a href={data.registerUrl}>Create account</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
