import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return null;
  }

  return user ? element : <Navigate to="/" replace />;
};

export default PrivateRoute;
