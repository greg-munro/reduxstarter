//reducer takes current instance of store and updates it.
//state = null, action = {type: 'ADD_TODO', text: 'Learn Redux'}

import store from "./store";
import reducer from "./reducer";

store.dispatch({
  type: "bugAdded",
  payload: {
    description: 'Bug1'
  }
})

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1
  }
})


console.log(store.getState())