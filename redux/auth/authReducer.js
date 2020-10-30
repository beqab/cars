const initState = {
  isAuth: false,
  token: null,
  user: null,
  loading: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isAuth: false,
        user: null,
        token: null,
      };

    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
};
