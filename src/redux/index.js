import { combineReducers } from 'redux';
import login from './reducers/LoginReducer';
import loading from './reducers/LoadingReducer';


//Combinar todos os reducers em um único local
export default combineReducers({
  login,
  loading,
});