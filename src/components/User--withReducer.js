import React, { useContext } from "react";
import { UserContext } from "../CustomContexts";
import Form from "./Form/Form";

const UserConsumer = UserContext.Consumer;

const User = props => (
  // can hve many things happeneing here
  <UserProfile />
);

// Subscribes to Parent state
const UserProfile = props => (
  <UserConsumer>
    {({ state }) => {
      return (
        <div>
          <h3>Profile Page of {state.username}</h3>
          <UserDetails />
        </div>
      );
    }}
  </UserConsumer>
);

/**
 * Also subscribes to Parent state,
 * but uses @func useContext() React context hook
 */

const UserDetails = () => {
  // context holdes the value initially set in provider
  const { state } = useContext(UserContext);
  const { username, firstName, lastName } = state;

  return (
    <section className="UserDetails">
      <p>Userame: {username}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>

      <Form
        onSubmit={e => {
          e.prevenDefault();
          //submit
        }}
      />
    </section>
  );
};

export default User;
