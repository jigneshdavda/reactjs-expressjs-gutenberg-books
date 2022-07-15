import { SET_DATA, CHANGE_PAGE, FILTER_DATA } from "../actions/actiontypes";

var INITIAL_STATE = {
  book_data: [],
  filtered_data: [],
  page_number: 1,
};

var bookReducer = (state = INITIAL_STATE, action) => {
  console.log("Action in reducer: ", action);
  switch (action.type) {
    case SET_DATA:
      return { ...state, book_data: action.payload };
      break;

    case CHANGE_PAGE:
      return state;
      break;

    case FILTER_DATA:
      return state;
      break;

    default:
      return state;
      break;
  }
};

export default bookReducer;
