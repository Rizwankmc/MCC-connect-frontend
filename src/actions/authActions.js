import * as constants from '../constants/authConstants';
import { userInstance } from '../axios';

export const login = (email, password , remember) => async (dispatch) => {
   
    dispatch({
      type: constants.USER_LOGIN_REQUEST,
    });
  
    const { data } = await userInstance.post('/auth/login', {
      email,
      password,
      remember
    });
    const { code } = data;
    if (code === 200) {
      const { username, token } = data;
      const payload = {
        username,
        token,
      };
      console.log(payload,JSON.stringify(payload))
      localStorage.setItem('token', JSON.stringify(payload));
      localStorage.setItem('userId', data.userId);
      dispatch({
        type: constants.USER_LOGIN_SUCCESS,
        payload,
      });
    } else {
      dispatch({
        type: constants.USER_LOGIN_FAIL,
        payload: data
      });
      dispatch({
        type: constants.USER_LOGOUT,
      });
    }
  };