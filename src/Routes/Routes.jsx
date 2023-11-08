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
import PrivateRoutes from "./PrivateRoutes";
import PostReview from "../pages/PostReview/PostReview";
import UpdateDate from "../pages/MyBookings/UpdateDate";
import Faq from "../pages/Faq/Faq";
import Contactus from "../pages/Contactus/Contactus";

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
        path: "/faqs",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
        loader: () =>
          axios.get(
            "https://hotel-x-server-eight.vercel.app/api/v1/get-testimonials"
          ),
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoutes>
            <MyBookings />
          </PrivateRoutes>
        ),
      },
      {
        path: "/room-details/:id",
        element: <RoomDetails />,
        loader: ({ params }) =>
          axios.get(
            `https://hotel-x-server-eight.vercel.app/api/v1/get-available-rooms/${params.id}`
          ),
      },
      {
        path: "/post-review",
        element: (
          <PrivateRoutes>
            <PostReview />
          </PrivateRoutes>
        ),
      },
      {
        path: "/date-update/:id",
        element: (
          <PrivateRoutes>
            <UpdateDate />
          </PrivateRoutes>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default router;
