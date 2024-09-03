import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";
import Footer from "../components/footer";

function AppLayout() {
  return (
    <div>
      <AppBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
