import React, { useContext } from "react";
import { UserContext } from "../../CustomContexts";

const FormActions = () => {
  const { handleReset, errors } = useContext(UserContext);
  console.log("errors", errors);
  return (
    <>
      <button type="button" onClick={handleReset}>
        Reset
      </button>

      <button disabled={Object.keys(errors).length} type="submit">
        Save
      </button>
    </>
  );
};
export default FormActions;
