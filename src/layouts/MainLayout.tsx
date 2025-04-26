import HeaderLayout from "@/layouts/HeaderLayout";
import FooterLayout from "@/layouts/FooterLayout";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderLayout />
      <main className="flex-1">
        <Outlet />
      </main>
      <FooterLayout />
    </div>
  )
}

export default MainLayout