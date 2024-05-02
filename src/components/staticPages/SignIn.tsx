import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext, LoginContextType } from "../../context/context";

const SignIn = (): JSX.Element => {
  const contextPointer = useContext<LoginContextType>(LoginContext);
  const navigate = useNavigate();

  const handleLogin = (): void => {
    contextPointer.login({ id: 1, name: "John Doe", role: "admin" });
    navigate("/");
  };
  return (
    <>
      <p>This is where login form would go </p>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default SignIn;
