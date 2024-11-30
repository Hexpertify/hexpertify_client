import { Outlet } from "react-router-dom";

import AppBar from "../components/AppBar/AppBar";
import Footer from "../components/footer";
import Promise from "../features/home/Promise";
import { useEffect } from "react";
import { openModal } from "../components/Modal";

function AppLayout() {
  useEffect(() => {
    openModal("promise");
  }, []);

  return (
    <div>
      <Promise />
      <AppBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
