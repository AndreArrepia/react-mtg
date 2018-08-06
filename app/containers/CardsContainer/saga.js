import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_CARDS } from 'containers/CardsContainer/constants';
import { cardsLoaded } from 'containers/App/actions';
import { LoadCardsSuccessAction } from 'containers/CardsContainer/actions';
import request from 'utils/request';

export function* getCards() {
  const requestURL = 'https://api.magicthegathering.io/v1/cards';

  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, requestURL);
    yield put(LoadCardsSuccessAction(result));
  } catch (err) {
    console.log('An error has occured when fetching cards', err);
    //yield put(repoLoadingError(err));
  }
}

// Individual exports for testing
export default function* getCardsData() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FETCH_CARDS, getCards);
}
