import React, { useState } from "react";
import "../styles/login-page.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("login payload", form);
  };

  return (
    <div className="react-login-page">
      <div className="react-login-wrap">
        <div className="react-login-left">
          <span className="hero-badge">Welcome Back</span>
          <h2>
            Your Next Adventure
            <br />
            <span>Starts Here</span>
          </h2>
          <p>
            Sign in to manage your bookings and explore premium cars across 12
            Indian cities.
          </p>

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80&auto=format&fit=crop"
            alt="Car"
          />

          <div className="stats-row">
            <div>
              <strong>500+</strong>
              <small>Cars</small>
            </div>
            <div>
              <strong>12</strong>
              <small>Cities</small>
            </div>
            <div>
              <strong>24/7</strong>
              <small>Support</small>
            </div>
          </div>
        </div>

        <div className="react-login-right">
          <div className="auth-card-react">
            <div className="top-icon">U</div>
            <h3>Welcome Back!</h3>
            <p>Sign in to your Pothik account</p>

            <form onSubmit={onSubmit}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                required
              />

              <label>Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={onChange}
                placeholder="........"
                required
              />

              <label className="remember-row">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={onChange}
                />
                <span>Remember me for 30 days</span>
              </label>

              <button type="submit">Sign In</button>
            </form>

            <div className="auth-foot">
              Don't have an account? <a href="/register">Register Free</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
