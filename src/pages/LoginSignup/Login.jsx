import { Link, useNavigate } from "react-router-dom";
import Extralogin from "./Extralogin";
import "./loginsignup.css";
import useAuth from "../../hooks/useAuth";
import useToaster from "../../hooks/useToaster";

const Login = () => {
  const { requestLogin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToaster();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      console.log("Password must have at least 6 digit");
      return;
    } else if (!/[A-Z]/.test(password)) {
      console.log("Password must have at least 1 Capital letter");
      return;
      //eslint-disable-next-line
    } else if (!/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/.test(password)) {
      console.log("Password must have 1 special character");
      return;
    }

    requestLogin(email, password)
      .then(() => {
        e.target.reset();
        toast("User Login Successfull", true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch(() => toast("something went wrong", true));
  };

  return (
    <div className="login-page w-full h-[760px] flex justify-center items-center mt-[88px] px-4 md:px-0">
      <form
        onSubmit={handleLogin}
        className="border-2 border-white form-control p-10 w-[500px] rounded-lg"
      >
        <h2 className="text-white text-3xl text-center mb-5">User Login</h2>
        <div className="w-full space-y-5">
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
            required
          />
          <button className="btn bg-red-500 text-white hover:text-black w-full">
            Login Now
          </button>
          <div className="my-2 flex text-white justify-between">
            <p className="font-semibold">New here?</p>
            <Link
              to="/user-signup"
              className="font-semibold hover:text-red-500"
            >
              Create Account
            </Link>
          </div>
        </div>
        <div>
          <Extralogin />
        </div>
      </form>
    </div>
  );
};

export default Login;
