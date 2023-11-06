import { useContext } from "react";
import { ToastContext } from "./Toaster";

function Toast() {
  const { show, message } = useContext(ToastContext);

  return (
    <div
      className={`w-64 h-24 fixed left-1/2 -translate-x-1/2 z-[99] ${
        show ? "top-10" : "-top-[9999px]"
      } transition-all duration-500`}
    >
      <div className="p-4 bg-white rounded-lg border-2 border-black font-roboto">
        {message}
      </div>
    </div>
  );
}

export default Toast;
