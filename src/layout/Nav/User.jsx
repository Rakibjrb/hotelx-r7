import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const User = () => {
  const { user, requestLogout } = useContext(AuthContext);

  const handleLogout = () => {
    requestLogout()
      .then(() => console.log("logout success"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="dropdown dropdown-end order-3 lg:order-3 ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} alt="user image" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">{user?.displayName}</a>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};
export default User;
