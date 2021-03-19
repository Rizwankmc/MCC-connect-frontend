import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {userLoginReducers} from './reducers/authReducers';

  // reducer calll like state name: reducername
const reducer = combineReducers({
    userLogin : userLoginReducers
})
  

const initialState = {
    userLogin: { userInfo: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null },
    adminLogin: { adminInfo: localStorage.getItem('admintoken') ? JSON.parse(localStorage.getItem('admintoken')) : null }
};

const middleWare = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;