import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {userLoginReducers} from './reducers/authReducers';
import { userDetailReducers } from './reducers/userReducer';

  // reducer calll like state name: reducername
const reducer = combineReducers({
    userLogin : userLoginReducers,
    userDetail:  userDetailReducers,
})
  

const initialState = {
    userLogin: { userInfo: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null },
    adminLogin: { adminInfo: localStorage.getItem('admintoken') ? JSON.parse(localStorage.getItem('admintoken')) : null }
};

const middleWare = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;