import { Outlet } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"

function Layout() {
  return (
    <section className="max-w-5xl mx-auto">
        <Header />
        <Outlet />
        <Footer />
    </section>
  )
}

export default Layout