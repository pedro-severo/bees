import { useProptectedRoutes } from "./../../hooks/useProtectedRoutes";
import { PATH } from "./../../routes/paths";
import { useGlobal } from "reactn";
import { useNavigate } from "react-router-dom";

export const useLogin = (
  disabledForm: boolean,
  form: any,
  cleanFields: () => void
): ((event: React.FormEvent) => void) => {
  const navigate = useNavigate();
  const [userName, setUsername] = useGlobal("userName");
  useProptectedRoutes(false);

  const handleSubmission = (event: React.FormEvent) => {
    event.preventDefault();
    if (!disabledForm) {
      setUsername(form.fullName);
      // Here I used a random token to example a authentication flow.
      // In a real implementation, I would use a token comming from a Login Endpoint.
      localStorage.setItem("token", "tokenJustForExample");
      localStorage.setItem("userName", form.fullName);
      navigate(`${PATH.HOME}`);
      cleanFields();
    }
  };

  return handleSubmission;
};
