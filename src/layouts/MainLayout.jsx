import Navbar from "../components/Home/Navbar"
import Footer from "../components/Home/Footer"
import { Outlet } from "react-router-dom"
function MainLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
