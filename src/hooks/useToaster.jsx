import { useContext } from "react";
import { ToastContext } from "../mytoast/Toaster";

const useToaster = () => {
  const toastInfo = useContext(ToastContext);

  return toastInfo;
};

export default useToaster;
