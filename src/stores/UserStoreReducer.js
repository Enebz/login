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

      case "LOGIN_DEV":
        return {
          ...state,
          loggedIn: true,
          loading: false,
          username: "dev_user",
          dev: true
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