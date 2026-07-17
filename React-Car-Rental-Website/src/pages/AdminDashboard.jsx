import React, { useEffect, useState } from "react";

const stats = [
  { label: "Total Users", value: 245, type: "primary", icon: "US" },
  { label: "Total Cars", value: 87, type: "info", icon: "CR" },
  { label: "Total Bookings", value: 412, type: "success", icon: "BK" },
  { label: "Pending", value: 23, type: "warning", icon: "PD" },
  { label: "Approved", value: 362, type: "success", icon: "AP" },
  { label: "Rejected", value: 27, type: "danger", icon: "RJ" },
];

const recentBookings = [
  {
    customer: "Rahim Uddin",
    car: "Toyota Axio",
    pickup: "2026-07-20",
    ret: "2026-07-23",
    status: "pending",
  },
  {
    customer: "Nusrat Jahan",
    car: "Honda Civic",
    pickup: "2026-07-19",
    ret: "2026-07-21",
    status: "approved",
  },
  {
    customer: "Siam Hossain",
    car: "Nissan X-Trail",
    pickup: "2026-07-18",
    ret: "2026-07-22",
    status: "rejected",
  },
  {
    customer: "Tanvir Hasan",
    car: "BMW 320i",
    pickup: "2026-07-21",
    ret: "2026-07-24",
    status: "pending",
  },
];

function AdminDashboard() {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const availableCars = 64;
  const bookedCars = 23;
  const totalCars = availableCars + bookedCars;
  const availablePct = totalCars ? Math.round((availableCars / totalCars) * 100) : 0;
  const isMobile = width < 900;
  const statCols = width < 600 ? "repeat(2,minmax(120px,1fr))" : width < 1200 ? "repeat(3,minmax(120px,1fr))" : "repeat(6,minmax(120px,1fr))";

  const shell = {
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "240px 1fr",
    background: "linear-gradient(130deg,#f4f6fb,#eef2ff)",
    color: "#1a1a2e",
    fontFamily: "Segoe UI, Tahoma, sans-serif",
  };

  const card = {
    background: "rgba(255,255,255,.86)",
    border: "1px solid rgba(255,255,255,.7)",
    borderRadius: 14,
    boxShadow: "0 10px 25px rgba(15,23,42,.08)",
  };

  const iconStyle = (type) => {
    const map = {
      primary: { bg: "#fee2e2", color: "#dc2626" },
      danger: { bg: "#fee2e2", color: "#dc2626" },
      info: { bg: "#dbeafe", color: "#2563eb" },
      success: { bg: "#d1fae5", color: "#059669" },
      warning: { bg: "#fef3c7", color: "#d97706" },
    };
    return {
      width: 32,
      height: 32,
      borderRadius: 999,
      display: "grid",
      placeItems: "center",
      marginBottom: 8,
      fontSize: 12,
      fontWeight: 700,
      background: map[type].bg,
      color: map[type].color,
    };
  };

  return (
    <div style={shell}>
      <aside style={{ background: "#111827", padding: isMobile ? "14px" : "24px 16px" }}>
        <div style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Pothik Admin</div>
        <nav style={{ display: "grid", gap: 8 }}>
          <a href="/admin-dashboard" style={{ textDecoration: "none", color: "#fff", background: "#1f2937", padding: "10px 12px", borderRadius: 10, fontSize: 14 }}>
            Dashboard
          </a>
          <a href="/cars" style={{ textDecoration: "none", color: "#d1d5db", padding: "10px 12px", borderRadius: 10, fontSize: 14 }}>Manage Cars</a>
          <a href="/bookings" style={{ textDecoration: "none", color: "#d1d5db", padding: "10px 12px", borderRadius: 10, fontSize: 14 }}>Booking Requests</a>
          <a href="/users" style={{ textDecoration: "none", color: "#d1d5db", padding: "10px 12px", borderRadius: 10, fontSize: 14 }}>Manage Users</a>
          <a href="/analytics" style={{ textDecoration: "none", color: "#d1d5db", padding: "10px 12px", borderRadius: 10, fontSize: 14 }}>Analytics</a>
        </nav>
      </aside>

      <main style={{ padding: isMobile ? 14 : 22 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <h1 style={{ margin: 0, fontSize: 28 }}>Dashboard</h1>
          <span style={{ background: "#fee2e2", color: "#991b1b", fontSize: 12, fontWeight: 700, padding: "6px 10px", borderRadius: 999 }}>ADMIN</span>
        </div>

        <section style={{ display: "grid", gridTemplateColumns: statCols, gap: 12, marginBottom: 14 }}>
          {stats.map((item) => (
            <div key={item.label} style={{ ...card, padding: 14 }}>
              <div style={iconStyle(item.type)}>{item.icon}</div>
              <div style={{ fontSize: 22, fontWeight: 800 }}>{item.value}</div>
              <div style={{ marginTop: 4, fontSize: 12, color: "#6b7280" }}>{item.label}</div>
            </div>
          ))}
        </section>

        <section style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12, marginBottom: 14 }}>
          <div style={{ ...card, padding: 18 }}>
            <h2 style={{ margin: "0 0 14px", fontSize: 18 }}>Fleet Availability</h2>
            <div style={{ display: "flex", gap: 24, marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#059669" }}>{availableCars}</div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>Available</div>
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#d97706" }}>{bookedCars}</div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>Booked</div>
              </div>
            </div>
            <div style={{ height: 9, borderRadius: 99, background: "#e5e7eb", overflow: "hidden", marginBottom: 6 }}>
              <div style={{ height: "100%", background: "#10b981", transition: "width .4s ease", width: `${availablePct}%` }} />
            </div>
            <p style={{ fontSize: 12, color: "#6b7280", margin: 0 }}>{availablePct}% fleet available</p>
          </div>

          <div style={{ ...card, padding: 18 }}>
            <h2 style={{ margin: "0 0 14px", fontSize: 18 }}>Quick Actions</h2>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button type="button" style={{ border: 0, borderRadius: 999, padding: "8px 12px", cursor: "pointer", fontSize: 12, fontWeight: 600, background: "#2563eb", color: "#fff" }}>Add Car</button>
              <button type="button" style={{ border: 0, borderRadius: 999, padding: "8px 12px", cursor: "pointer", fontSize: 12, fontWeight: 600, background: "#fef3c7", color: "#92400e" }}>View Requests</button>
              <button type="button" style={{ border: 0, borderRadius: 999, padding: "8px 12px", cursor: "pointer", fontSize: 12, fontWeight: 600, background: "#e0f2fe", color: "#075985" }}>Analytics</button>
            </div>
          </div>
        </section>

        <section style={{ ...card, overflow: "hidden" }}>
          <div style={{ padding: 16, borderBottom: "1px solid #eef2f7", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h2 style={{ margin: 0, fontSize: 18 }}>Recent Bookings</h2>
            <a href="/bookings" style={{ fontSize: 13, color: "#dc2626", textDecoration: "none", fontWeight: 600 }}>View All</a>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px 14px", borderBottom: "1px solid #f1f5f9", whiteSpace: "nowrap" }}>Customer</th>
                  <th style={{ textAlign: "left", padding: "12px 14px", borderBottom: "1px solid #f1f5f9", whiteSpace: "nowrap" }}>Car</th>
                  <th style={{ textAlign: "left", padding: "12px 14px", borderBottom: "1px solid #f1f5f9", whiteSpace: "nowrap" }}>Pickup</th>
                  <th style={{ textAlign: "left", padding: "12px 14px", borderBottom: "1px solid #f1f5f9", whiteSpace: "nowrap" }}>Return</th>
                  <th style={{ textAlign: "left", padding: "12px 14px", borderBottom: "1px solid #f1f5f9", whiteSpace: "nowrap" }}>Status</th>
                  <th style={{ textAlign: "left", padding: "12px 14px", borderBottom: "1px solid #f1f5f9", whiteSpace: "nowrap" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((row) => (
                  <tr key={`${row.customer}-${row.pickup}`}>
                    <td style={{ textAlign: "left", padding: "12px 14px", borderBottom: "1px solid #f1f5f9", whiteSpace: "nowrap" }}>{row.customer}</td>
                    <td style={{ textAlign: "left", padding: "12px 14px", borderBottom: "1px solid #f1f5f9", whiteSpace: "nowrap" }}>{row.car}</td>
                    <td style={{ textAlign: "left", padding: "12px 14px", borderBottom: "1px solid #f1f5f9", whiteSpace: "nowrap" }}>{row.pickup}</td>
                    <td style={{ textAlign: "left", padding: "12px 14px", borderBottom: "1px solid #f1f5f9", whiteSpace: "nowrap" }}>{row.ret}</td>
                    <td style={{ textAlign: "left", padding: "12px 14px", borderBottom: "1px solid #f1f5f9", whiteSpace: "nowrap" }}>
                      <span style={{ textTransform: "capitalize", fontSize: 11, fontWeight: 700, padding: "5px 8px", borderRadius: 999, background: row.status === "approved" ? "#d1fae5" : row.status === "rejected" ? "#fee2e2" : "#fef3c7", color: row.status === "approved" ? "#065f46" : row.status === "rejected" ? "#991b1b" : "#92400e" }}>{row.status}</span>
                    </td>
                    <td style={{ textAlign: "left", padding: "12px 14px", borderBottom: "1px solid #f1f5f9", whiteSpace: "nowrap" }}>
                      <button type="button" style={{ border: 0, borderRadius: 999, padding: "8px 12px", cursor: "pointer", fontSize: 12, fontWeight: 600, background: "#f3f4f6", color: "#334155" }}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
