import { Outlet } from "react-router-dom";
import Nav from "./layout/Nav/Nav";
import Footer from "./layout/Footer/Footer";
import Toast from "./mytoast/Toast";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const App = () => {
  return (
    <div className="overflow-hidden" data-theme="light">
      <Toast />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
