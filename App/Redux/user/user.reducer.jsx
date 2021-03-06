const INITIAL_STATE = {
  cuurentUser: null,
};

const userReducer = (stat = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
