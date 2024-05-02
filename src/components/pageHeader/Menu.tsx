import { Link } from "react-router-dom";
import {
  LoginContext,
  LoginContextType,
  UserType,
} from "../../context/context";
import { useContext } from "react";

const Menu = (): JSX.Element => {
  //  14 render the sign in button only if user is not logged in.
  const contextPointer = useContext<LoginContextType>(LoginContext);
  const userDetails: UserType = contextPointer.user;

  return (
    <ul className="nav">
      <li>
        <Link to="/find">Find a transaction</Link>
      </li>
      <li>
        <Link to="/add">New transaction</Link>
      </li>
      {/* 13 create a link to signin */}
      <li>
        {userDetails.id === 0 ? (
          <Link to="/signin">Sign in</Link>
        ) : (
          userDetails.name
        )}
      </li>
    </ul>
  );
};

export default Menu;
