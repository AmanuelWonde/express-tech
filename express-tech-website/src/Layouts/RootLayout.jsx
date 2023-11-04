import { Outlet } from 'react-router-dom';
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Copyright } from "../components/Copyright";

export default function Rootlayout(){
  return(
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
        <Copyright />
      </footer>
    </div>
  )
}