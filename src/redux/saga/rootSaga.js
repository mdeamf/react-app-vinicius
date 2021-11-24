import { put, takeLatest, all, call } from 'redux-saga/effects'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

function postLogin(user, password) {
  return new Promise((resolve, reject) => {
    if (user != '' && password != '') {
      console.log('SUCESSO')
      resolve({
        error: false
      })
    } else {
      console.log('FALHA')
      reject({
        error: true
      })
    }
  })
}

export function* LoginAsync(action) {
  try {
    const response = yield call(postLogin, action.user, action.password);
    yield put({ type: 'SUCCESS_LOGIN', error: response.error });
  } catch (err) {
    const response = yield call(postLogin, action.user, action.password);
    yield put({ type: 'FAILURE_LOGIN', error: response.error });
  }
};

export function* watchLoginAsync() {
  yield takeLatest('LOGIN', LoginAsync)
}

export default function* rootSaga() {
  yield all([
    watchLoginAsync()
  ])
}