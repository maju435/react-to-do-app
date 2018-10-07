import { call, put, takeEvery, take } from 'redux-saga/effects';
import { fetchToDoListRequest, fetchToDoListSuccess, fetchToDoListError } from './index';

const url = new URL('/todos', 'https://jsonplaceholder.typicode.com')

// worker Saga: will be fired on TODO_FETCH actions

let v = 1
function* fetchTodoList() {
  try {
    const data = yield call(() => {
      return fetch(url+'/'+v)
      .then(resp => {
        console.log(resp)
        if (resp.ok){
          return resp.json();
        } else {
          throw new Error('there is something wrong with data')
        }
      })
      .then(json => {
        v++
        console.log(json)
        return json;
      })
    });
    yield put(fetchToDoListSuccess(data));
  } catch (error) {
    yield put(fetchToDoListError(error));
  }
}

function* appSaga() {
  yield takeEvery("TODO_FETCH", fetchTodoList);
}

export default appSaga;