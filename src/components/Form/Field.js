import { createElement, useContext } from "react";
import { UserContext } from "./../../CustomContexts";

const Field = props => {
  const { name, component, ...otherProps } = props;
  const { state, setFieldValue } = useContext(UserContext);
  const Component = component || "input";

  return createElement(Component, {
    type: "text",
    value: state[name],
    onChange: e => setFieldValue(name, e.target.value),
    ...otherProps
  });
};

export default Field;
