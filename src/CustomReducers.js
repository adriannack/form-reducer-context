export const userFormReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return { ...action.payload };
    case "setFormValues":
      return { ...state, [action.name]: action.value };
    case "setFormErrors":
      return { ...action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
