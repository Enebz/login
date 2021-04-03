import UserStoreReducer from './UserStoreReducer'

const StoreReducer = (state, action) => {
  switch (action.type) {
      case 'USER':
        return {
          ...state,
          user: UserStoreReducer(state.user, action)
        }
      default:
          return state;
  }
};

export default StoreReducer;