import { PATH } from "./../routes/paths";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProptectedRoutes = (isAProtectedRoute: boolean): void => {
  const navigate = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const token = localStorage.getItem("token");
    if (userName && token) {
      navigate(`${PATH.HOME}`);
    }
  }, []);

  useEffect(() => {
    if (isAProtectedRoute) {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate(`${PATH.LOGIN}`);
      }
    }
  }, []);
};
