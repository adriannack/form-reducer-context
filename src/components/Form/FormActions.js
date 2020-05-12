import React, { useContext } from "react";
import { UserContext } from "../../CustomContexts";

const FormActions = props => {
  const { handleReset } = useContext(UserContext);
  return (
    <>
      <button type="button" onClick={handleReset}>
        Reset
      </button>

      <button type="submit">Save</button>
    </>
  );
};
export default FormActions;
