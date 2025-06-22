import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
