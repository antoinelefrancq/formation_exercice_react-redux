import data from 'src/data';
import { IMPORT_DATA } from '../actions/recipes';

export const initialState = {
  list: data,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IMPORT_DATA:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
