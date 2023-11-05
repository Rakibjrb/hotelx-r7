import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../layout/Home/Home";
import Login from "../pages/LoginSignup/Login";
import Signup from "../pages/LoginSignup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user-login",
        element: <Login />,
      },
      {
        path: "/user-signup",
        element: <Signup />,
      },
    ],
  },
]);
export default router;
