const UserStoreReducer = (state, action) => {
  switch (action.command) {
    case "SET":
      return {
        ...state,
        ...action.data
      }

    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        loading: false,
        username: action.data.username
      }

    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        loading: false,
        username: ""
      }

    case "ERROR":
      return {
        ...state,
        loggedIn: false,
        loading: false,
        username: ""
      }
    default:
      return {
        ...state
      }
  }
};

export default UserStoreReducer;