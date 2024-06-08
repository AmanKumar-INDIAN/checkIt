import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Footer } from "../components/Footer"


function Layout() {
  return <div className=" bg-black">
    <Navbar/>
    
    
    <Outlet/>
    <Footer/>
    </div>
}

export default Layout
