import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import User from "./User";
import MobileDrawer from "./MobileDrawer";

const navLinks = (
  <>
    <li>
      <NavLink to="/" className="links">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/rooms" className="links">
        Rooms
      </NavLink>
    </li>
    <li>
      <NavLink to="/my-bookings" className="links">
        My Bookings
      </NavLink>
    </li>
  </>
);

const Nav = () => {
  const user = false;

  return (
    <div className="z-50 absolute w-full top-0 bg-[#fffefe9c]">
      <div className="max-w-6xl mx-auto py-5 px-3 xl:px-0">
        <nav className="flex flex-row lg:flex-row justify-between items-center font-roboto">
          <div className="order-2 lg:order-1">
            <h4 className="text-2xl font-bold">HotelX</h4>
          </div>
          <ul className="items-center gap-8 lg:flex lg:order-2 hidden text-xl">
            {navLinks}
          </ul>
          {user ? (
            <User />
          ) : (
            <div className="order-3 lg:order-3">
              <Link
                to="/user-login"
                className="btn btn-outline order-3 lg:order-3"
              >
                Login
              </Link>
            </div>
          )}
          <MobileDrawer navLinks={navLinks} />
        </nav>
      </div>
    </div>
  );
};

export default Nav;
