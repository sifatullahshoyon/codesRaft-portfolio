import { Outlet } from "react-router";
import { Footer } from "../components/shared/Footer";
import { Navbar } from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
