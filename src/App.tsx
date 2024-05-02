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
  // 2) create a stateful user
  const [user, setUser] = useState<UserType>({ id: 0, name: "", role: "" });

  // add this, to see the result of the SignIn button click
  console.log(user);

  const login = (user: UserType) => {
    //3  function that recieves a user object and sets the user (stateful)
    setUser(user);
  };

  const logout = () => {
    // 4 function that recieves nothing and logs the user out
    setUser({ id: 0, name: "", role: "" });
  };

  // create variable holding the stateful contect object
  const statefulContext: LoginContextType = {
    user: user,
    login: login,
    logout: logout,
  };

  // 5 use the context to proivide the context
  // boadcastingthe stateful user object, and the functions for changing the  from logged in to logged out.

  // 6. next,  create a Sign in component under static pages and simulate a user log in.
  // we will come back here here and add a route to it.
  return (
    <LoginContext.Provider value={statefulContext}>
      <BrowserRouter>
        <PageHeader />
        <Routes>
          {/* 12 route for sign in component. next, render a Sign In button in Menu to link to the route */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/find" element={<FindTransactionPage />} />
          <Route path="/add" element={<AddTransactionPage />} />
          <Route path="/" element={<HomePage />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
