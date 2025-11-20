import type React from "react";
import {SidebarDemo} from "./components/SideBarDemo";

export default function AppLayout({children} :{children: React.ReactNode}) {
  return (
    <div style={{ display: "flex flex-cols" }}>
      <SidebarDemo/>
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}