import axios from 'axios';
import { actionSaveData, FETCH_DATA } from '../../actions/recipes';

const importDataMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA: {
      axios.get('http://localhost:3001/recipes')
        .then((result) => {
          store.dispatch(actionSaveData(result.data));
        })
        .catch((error) => {
          console.log('Requete axios NOK', error);
        });
      return {
      };
    }
    default:
  }
  return next(action);
};

export default importDataMiddleware;
