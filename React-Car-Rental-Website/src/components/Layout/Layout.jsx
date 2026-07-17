import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
  const location = useLocation();
  const isAdminDashboard = location.pathname === "/admin-dashboard";

  return (
    <Fragment>
      {!isAdminDashboard && <Header />}
      <div>
        <Routers />
      </div>
      {!isAdminDashboard && <Footer />}
    </Fragment>
  );
};

export default Layout;
