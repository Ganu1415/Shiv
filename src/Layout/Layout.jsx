// layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "../componentes/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="pt-16 px-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
