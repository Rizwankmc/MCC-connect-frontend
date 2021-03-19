   import * as constants from '../constants/authConstants';
   export const userLoginReducers = (state = {}, action) => {
        switch (action.type) {
          case constants.USER_LOGIN_REQUEST:
            return { loading: true };
          case constants.USER_LOGIN_SUCCESS:
            return {
              loading: false,
              userInfo: {
                token: action.payload.token,
                username: action.payload.username,
              },
            };
          case constants.USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
          case constants.USER_LOGOUT:
            return {};
          case constants.USER_VERIFIED:
            return {};
            case '': 
            return {}
          default:
            return state;
        }
      }