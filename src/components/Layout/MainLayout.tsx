import Sidebar from "@/components/Layout/Sidebar";
import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="mt-40 flex py-7 md:mt-14 md:justify-between">
        <Sidebar />
        <div className="mx-8 h-full w-full md:ml-[300px] md:mr-8 lg:ml-[440px]">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
