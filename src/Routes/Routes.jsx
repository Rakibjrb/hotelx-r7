import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../layout/Home/Home";
import Login from "../pages/LoginSignup/Login";
import Signup from "../pages/LoginSignup/Signup";
import ErrorPage from "../pages/page-not-found/ErrorPage";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";

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
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default router;
