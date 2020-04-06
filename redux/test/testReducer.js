const initState = {
  test: "cars test",
};

export const testReducer = (state = initState, action) => {
  switch (action.type) {
    case "AUTH_START_LOADING":
      return {
        test: "testdddd",
      };
    default:
      return state;
  }
};
