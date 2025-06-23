import { Outlet } from "react-router";
import { Footer } from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
