const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, loading: true, users: [] };

    case "USERS_RECEIVED":
      return { ...state, loading: false, users: action.users };

    default:
      return state;
  }
};

export default reducer;
