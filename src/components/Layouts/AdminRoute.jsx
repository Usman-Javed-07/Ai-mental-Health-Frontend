import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ element }) => {
  const { user, loading } = useAuth();

  if (loading) return null;

  return user && user.role === "admin" ? (
    element
  ) : (
    <Navigate to="/Home" replace />
  );
};

AdminRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default AdminRoute;
