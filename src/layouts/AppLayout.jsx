import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Hero/Header";

const AppLayout = () => {
  return (
    <div className="bg-radial-dark text-white min-h-screen w-screen overflow-x-hidden flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
