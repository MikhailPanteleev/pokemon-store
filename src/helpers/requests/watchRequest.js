import { call, put, takeEvery } from 'redux-saga/effects';

import apiCallsMapping from '../../http/apiCallsMapping';
import createActionWithPostfix from '../utils/actionPostfixCreator';
import { ACTION_POSTFIXES } from '../../constants/actionPostfixes';

const { REQUEST_POSTFIX, SUCCESS_POSTFIX, FAIL_POSTFIX } = ACTION_POSTFIXES;

function* sendRequest(action) {
  try {
    const callMethod = apiCallsMapping(action);
    const response = yield call(callMethod, action.payload);

    const newActionToDispatch = createActionWithPostfix(
      action,
      {
        response: response.data,
        actionPayload: action.payload,
      },
      SUCCESS_POSTFIX
    );

    yield put(newActionToDispatch);
  } catch (error) {
    yield put(
      createActionWithPostfix(
        action,
        {
          response: error.response.data.message,
        },
        FAIL_POSTFIX
      )
    );
  }
}

const isApiCallAction = (action) => {
  return action.type.endsWith(REQUEST_POSTFIX);
};

function* apiCallsSaga() {
  yield takeEvery(isApiCallAction, sendRequest);
}

export default apiCallsSaga;
