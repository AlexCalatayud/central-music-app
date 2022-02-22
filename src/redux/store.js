import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "redux-reducer";

const initialState = {};

//PUNTO INTERMEDIO
const middleware = [thunk];

const store = createStore(
  //reducer
  reducer,
  //estado inicial
  initialState,
  //configuracion adicionalees de thunk / dev tools
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
