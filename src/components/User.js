import React from "react";
import { UserContext } from "../CustomContexts";

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

// Subscribes to Parent state and fires callback actions
const UserDetails = () => {
  return (
    <UserConsumer>
      {context => {
        // context holdes the value initially set in provider
        const { state, setFieldValue, handleReset } = context;
        const { username, firstName, lastName } = state;

        return (
          <form>
            <section className="UserDetails">
              <p>Userame: {username}</p>
              <p>First Name: {firstName}</p>
              <p>Last Name: {lastName}</p>
            </section>

            <label>
              Firstname:{" "}
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={e => setFieldValue("firstName", e.target.value)}
              />
            </label>

            <br />
            <label>
              Lastname:{" "}
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={e => setFieldValue("lastName", e.target.value)}
              />
            </label>

            <br />
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </form>
        );
      }}
    </UserConsumer>
  );
};

export default User;
