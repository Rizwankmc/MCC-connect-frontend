import * as constants from '../constants/userConstant';
export const userDetailReducers = (state = {}, action) => {
     switch (action.type) {
       case constants.USER_DETAILS_REQUEST:
         return { loading: true };
       case constants.USER_DETAILS_SUCCESS:
         return {
           loading: false,
           profileInfo: action.payload
         };
       case constants.USER_DETAILS_FAIL:
         return { loading: false, error: action.payload };
       default:
         return state;
     }
   }