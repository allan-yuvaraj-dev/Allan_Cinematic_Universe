import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { pathname } = useLocation();

  if (!isLoaded) return null;
  if (!isSignedIn)
    return <Navigate to="/Er.Allen_Yuvaraj/?sign-in=true" replace />;

  if (
    user &&
    !user.unsafeMetadata?.role &&
    pathname !== "/Er.Allen_Yuvaraj/"
  ) {
    return <Navigate to="/Er.Allen_Yuvaraj/" />;
  }

  return children;
};

export default ProtectedRoutes;
