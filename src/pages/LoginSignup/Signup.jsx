import { Link, useNavigate } from "react-router-dom";
import Extralogin from "./Extralogin";
import useAuth from "../../hooks/useAuth";
import useToaster from "../../hooks/useToaster";
import ReactHelmet from "../../components/commonComponents/ReactHelmet";

const Signup = () => {
  const { createUser, updateNameAndPhoto } = useAuth();
  const { toast } = useToaster();
  const navigate = useNavigate();

  const handleUserCreate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      toast("Password must have at least 6 digit", true);
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast("Password must have at least 1 Capital letter", true);
      return;
      //eslint-disable-next-line
    } else if (!/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/.test(password)) {
      toast("Password must have 1 special character", true);
      return;
    }

    createUser(email, password)
      .then(() => {
        updateNameAndPhoto(name)
          .then(() => {
            e.target.reset();
            toast("User Account Create Success", true);
            setTimeout(() => {
              navigate("/");
            }, 2000);
          })
          .catch((err) => console.log(err));
      })
      .catch(() => toast("something went wrong", true));
  };

  return (
    <div className="login-page w-full h-[760px] flex justify-center items-center mt-[88px] px-4 md:px-0">
      <form
        onSubmit={handleUserCreate}
        className="border-2 border-white form-control p-10 w-[500px] rounded-lg"
      >
        <h2 className="text-white text-3xl text-center mb-5">User Sign Up</h2>
        <div className="w-full space-y-5">
          <input
            type="name"
            placeholder="Enter name"
            className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
            name="name"
            required
          />
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
            className="px-3 py-2 rounded-lg w-full text-white bg-transparent border-2 border-white"
            name="password"
            required
          />
          <button className="btn bg-red-500 text-white hover:text-black w-full">
            Sign Up
          </button>
          <div className="my-2 flex text-white justify-between">
            <p className="font-semibold">Already have an accound?</p>
            <Link to="/user-login" className="font-semibold hover:text-red-500">
              Login now
            </Link>
          </div>
        </div>
        <div>
          <Extralogin />
        </div>
      </form>
      <ReactHelmet title="Hotel X | User Sign Up" />
    </div>
  );
};

export default Signup;
