import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useToaster from "../../hooks/useToaster";

const Extralogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToaster();

  return (
    <div className="w-full mt-5 font-roboto">
      <div className="flex items-center justify-between mb-5">
        <div className="bg-white h-1 w-28"></div>
        <h3 className="text-white text-xl">OR</h3>
        <div className="bg-white h-1 w-28"></div>
      </div>
      <button
        onClick={() => {
          googleLogin()
            .then(() => {
              toast("Google login successfull", true);
              setTimeout(() => {
                navigate("/");
              }, 2000);
            })
            .catch(() => toast("something went wrong", true));
        }}
        className="py-2 px-3 btn w-full bg-transparent text-white hover:text-black"
      >
        <FcGoogle className="text-2xl" /> Google
      </button>
    </div>
  );
};

export default Extralogin;
