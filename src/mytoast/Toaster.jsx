import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const ToastContext = createContext();

const Toaster = ({ children }) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("working");

  const toast = (msg = "", isShow) => {
    setMessage(msg);
    setShow(isShow);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const toastInfo = {
    toast,
    show,
    message,
  };

  return (
    <ToastContext.Provider value={toastInfo}>{children}</ToastContext.Provider>
  );
};

Toaster.propTypes = {
  children: PropTypes.node,
};
export default Toaster;
