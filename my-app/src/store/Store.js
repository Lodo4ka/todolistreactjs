import {createStore} from 'redux';
import userReducer from './user/UserReducer';

let store = createStore(userReducer);

export default store;