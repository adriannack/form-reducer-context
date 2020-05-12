/* eslint-disable no-unused-vars */
import React, { useState, useReducer } from "react";
import { UserContext } from "./CustomContexts";
import { userFormReducer } from "./CustomReducers";
import User from "./components/User--withReducer";

import ReactLogo from "./assets/ReactLogo";
import "./styles.css";

/**
 * @summary Goal here is to replace
 * @func useState() const [user, setUser] = useState({})
 * with the more sophisticated
 * @func useReducer() const [state, dispatch] = useReducer(reducer, initialArg, init);
 *  multiple state|actions
 */

const App = () => {
  // replacing initialState w/custom local deets
  // pretend she's logged in!
  const initialState = {
    username: "MacyCats",
    firstName: "",
    lastName: ""
  };

  // Init Provider Data
  const UserProvider = UserContext.Provider;
  const [state, dispatch] = useReducer(userFormReducer, initialState);

  const userFormProps = {
    state,
    setFieldValue: (name, value) =>
      dispatch({ type: "setFormValues", name, value }),
    handleReset: () => dispatch({ type: "reset", payload: initialState })
  };

  return (
    <main className="App">
      <header className="App-header">
        <ReactLogo />
        <h1>React Context</h1>
      </header>

      {/* App component that provides initial context values */}
      <UserProvider value={userFormProps}>
        {/* <User/> has access to global provider state */}
        <User />
      </UserProvider>
    </main>
  );
};

export default App;
