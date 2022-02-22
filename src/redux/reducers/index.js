import {conbineReducers} from 'redux'
import { darkModeReducer } from './themeReducers';

const reducer = conbineReducer({
  //lista de los reducers
  darkMode: darkModeReducer
})

export default reducer;