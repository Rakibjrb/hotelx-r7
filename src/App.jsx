import { Outlet } from "react-router-dom";
import Nav from "./layout/Nav/Nav";
import Footer from "./layout/Footer/Footer";
import Toast from "./mytoast/Toast";

const App = () => {
  return (
    <div>
      <Toast />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
