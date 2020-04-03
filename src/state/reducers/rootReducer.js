import initialState from "../store/initialState";
import * as actionTypes from "../actions/actionTypes";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        showLogin: true,
        showArticlesList: false,
        singleArticle: undefined
      };

    case actionTypes.CLOSE_LOGIN:
      return {
        ...state,
        showLogin: false,
        showArticlesList: true,
        message: ""
      };

    case actionTypes.GREETING:
      debugger
      return {
        ...state,
        message: action.payload
      };

    case actionTypes.AUTHENTICATE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;
