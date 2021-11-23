import { handleActions } from 'redux-actions';
import { LOCAL_STORAGE_KEY } from '../../../constants/localStorageKeys';

import * as actions from '../actions';

const defaultState = {
  isLoading: false,
  isAuth: false,
  userInfo: {},
  accessToken: null,
  error: null,
};

const authReducer = handleActions(
  {
    [actions.LOGIN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.LOGIN_SUCCESS]: (state, { payload }) => {
      const { accessToken, ...userInfo } = payload.response;

      localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN, accessToken);

      return {
        ...state,
        isLoading: false,
        isAuth: true,
        error: null,
        userInfo,
      };
    },
    [actions.LOGIN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),
  },
  defaultState
);

export default authReducer;
