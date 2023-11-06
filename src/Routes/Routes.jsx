import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../layout/Home/Home";
import Login from "../pages/LoginSignup/Login";
import Signup from "../pages/LoginSignup/Signup";
import ErrorPage from "../pages/page-not-found/ErrorPage";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import axios from "axios";

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
        loader: () =>
          axios.get("http://localhost:5000/api/v1/get-testimonials"),
      },
      {
        path: "/my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/room-details/:id",
        element: <RoomDetails />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default router;
