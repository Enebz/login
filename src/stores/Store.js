import React, {createContext, useReducer} from 'react';

import StoreReducer from './StoreReducer'

const init = {
  user: { 
    loggedIn: false,
    loading: true,
    username: "",
    dev: false,
  }
}

function Store(props) {
  const [state, dispatch] = useReducer(StoreReducer, init)

  return (
    <Context.Provider value={[state, dispatch]}>
        {props.children}
    </Context.Provider>
)
}

export const Context = createContext(init);
export default Store;