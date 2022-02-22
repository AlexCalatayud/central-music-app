import actionsTypes from "./actionsTypes"

export const setOnDarkMode = () => {
  return (dispatch) => {
    dispatch({type: actionsTypes.ON_DARK_MODE}); // 'ON_FARK_MODE'
  }
}

export const setOffDarkMode = () => {
  return (dispatch) => {
    dispatch({type: actionsTypes.OFF_DARK_MODE})
  }
}