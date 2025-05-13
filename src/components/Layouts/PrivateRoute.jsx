import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element }) => {
  const { user, loading } = useAuth();

  // ✅ Wait for loading to finish (prevents redirect on refresh)
  if (loading) {
    return null; // Or you can return a <Loader /> if you want
  }

  return user ? element : <Navigate to="/" replace />;
};

export default PrivateRoute;
