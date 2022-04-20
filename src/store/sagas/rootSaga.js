import { fork, all } from 'redux-saga/effects';
import * as productsSagas from './sagas';

export default function* rootSaga() {
    yield all(
        [...Object.values(productsSagas).map(fork)]
      );
}