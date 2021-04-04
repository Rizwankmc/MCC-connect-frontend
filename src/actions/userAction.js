import * as constants from '../constants/userConstant';
import { userInstance } from '../axios';

export const getUserProfile = (user) => async (dispatch) => {
   
    dispatch({
      type: constants.USER_DETAILS_REQUEST,
    });
  
    const { data } = await userInstance.post('/user/myprofile', {
      user
    });
    const { code } = data;
    if (code === 200) {
      dispatch({
        type: constants.USER_DETAILS_SUCCESS,
        payload: data.userInfo,
      });
    }
    else {
      dispatch({
        type: constants.USER_DETAILS_FAIL,
        payload: data.msg,
      });
    }
  };