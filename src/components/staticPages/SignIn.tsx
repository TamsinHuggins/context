import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext, LoginContextType } from "../../context/context";

const SignIn = (): JSX.Element => {
  // 7 local variable that points to global context.
  const contextPointer = useContext<LoginContextType>(LoginContext);

  // 8 ability to navigate from the router
  const navigate = useNavigate();

  // 9 function that accesses the global login
  const handleLogin = (): void => {
    contextPointer.login({ id: 1, name: "John Doe", role: "admin" });

    //10 nagivate to home
    navigate("/");
  };
  return (
    <>
      <p>This is where login form would go </p>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

// 11 go back to App and create a route for this.

export default SignIn;
