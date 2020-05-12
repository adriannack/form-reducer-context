import React from "react";
import Field from "./Field";
import FormActions from "./FormActions";

const Form = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Firstname: <Field name="firstName" />
      </label>

      <br />
      <label>
        Lastname: <Field name="lastName" />
      </label>

      <br />
      <br />

      <FormActions />
    </form>
  );
};
export default Form;
