import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isauthorised } = useAuth();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isauthorised) navigate("/");
    },
    [isauthorised, navigate]
  );
  return isauthorised && children;
}

export default ProtectedRoute;
