import { Outlet } from "react-router-dom";
import Nav from "./layout/Nav/Nav";
import Footer from "./layout/Footer/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
