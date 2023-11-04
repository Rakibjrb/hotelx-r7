import { FaBarsStaggered } from "react-icons/fa6";
import PropTypes from "prop-types";

const MobileDrawer = ({ navLinks }) => {
  return (
    <div className="lg:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="btn btn-neutral drawer-button">
          <FaBarsStaggered className="text-xl" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

MobileDrawer.propTypes = {
  navLinks: PropTypes.node
};
export default MobileDrawer;
