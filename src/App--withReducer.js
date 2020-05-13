/* eslint-disable no-unused-vars */
import React, { useReducer } from "react";
import { UserContext } from "./CustomContexts";
import { userFormReducer } from "./CustomReducers";
import User from "./components/User--withReducer";

import ReactLogo from "./assets/ReactLogo";
import "./styles.css";

import Field from "./components/Form/Field";

/**
 * @summary Replaces
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
    lastName: "",
    validate: false
  };

  // Init Provider Data
  const UserProvider = UserContext.Provider;
  const [state, dispatch] = useReducer(userFormReducer, initialState);
  const [errors, errorDispatch] = useReducer(userFormReducer, {});

  const userFormProps = {
    state,
    errors,
    setFieldValue: (name, value) =>
      dispatch({ type: "setFormValues", name, value }),
    handleReset: () => dispatch({ type: "reset", payload: initialState }),
    setErrors: err => errorDispatch({ type: "setFormErrors", payload: err })
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
