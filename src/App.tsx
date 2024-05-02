import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddTransactionPage from "./components/AddTransactionPage/AddTransactionPage";
import FindTransactionPage from "./components/FindTransactionPage/FindTransactionPage";
import PageHeader from "./components/pageHeader/PageHeader";
import HomePage from "./components/staticPages/HomePage";
import PageNotFound from "./components/staticPages/PageNotFound";
import { useState } from "react";
import { UserType, LoginContextType, LoginContext } from "./context/context";
import SignIn from "./components/staticPages/SignIn";

function App() {
  const [user, setUser] = useState<UserType>({ id: 0, name: "", role: "" });

  const login = (user: UserType) => {
    // recieves a user object and sets the user (stateful)
    setUser(user);
  };

  const logout = () => {
    setUser({ id: 0, name: "", role: "" });
  };

  const statefulContext: LoginContextType = {
    user: user,
    login: login,
    logout: logout,
  };

  return (
    <LoginContext.Provider value={statefulContext}>
      <BrowserRouter>
        <PageHeader />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/find" element={<FindTransactionPage />} />
          {/* <Route path="/find/?id" element={<FindTransactionPage />} /> */}
          <Route path="/add" element={<AddTransactionPage />} />
          <Route path="/" element={<HomePage />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
