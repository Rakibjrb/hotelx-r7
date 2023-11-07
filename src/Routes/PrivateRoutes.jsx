import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { isLoading, user } = useAuth();
  if (isLoading) {
    return (
      <div className="w-full flex justify-center mt-[128px] mb-24">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user && !isLoading) {
    return children;
  }
  return <Navigate state={location.pathname} to="/user-login" />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
