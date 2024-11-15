import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import Toaster from "./mytoast/Toaster.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Toaster>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Toaster>
  </AuthProvider>
);
