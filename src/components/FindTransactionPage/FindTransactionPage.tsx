import { useNavigate, useParams } from "react-router-dom";
import Search from "./Search/Search";
import Transactions from "./Transactions/Transactions";
import { useState } from "react";
import { useContext } from "react";
import { LoginContext, LoginContextType } from "../../context/context";

const FindTransactionPage = () => {
  const contextPointer = useContext<LoginContextType>(LoginContext);

  const params = useParams();

  const [searchTerm, setSearchTerm] = useState<string>(
    params.orderId ? params.orderId : ""
  );

  const navigate = useNavigate();

  const applySearchTerm = (searchTerm: string): void => {
    setSearchTerm(searchTerm);
    navigate(`/find/${searchTerm}`);
  };

  return contextPointer.user.name === "" ? (
    <p> Log in to view transactions</p>
  ) : (
    <div>
      <Search initialSearchTerm={searchTerm} setSearchTerm={applySearchTerm} />
      <Transactions searchTerm={searchTerm} />
    </div>
  );
};

export default FindTransactionPage;
