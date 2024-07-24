import React from "react";
import { HeaderAsync } from "src/widgets/Header";
import { SidebarAsync } from "src/widgets/Sidebar";
import "./style.scss";
import { Outlet } from "react-router-dom";

type Props = {};

export const LayoutWrapper: React.FC<Props> = () => {
  return (
    <main className="layout">
      <SidebarAsync />
      <section className="content">
        <HeaderAsync />
        <Outlet />
      </section>
    </main>
  );
};
