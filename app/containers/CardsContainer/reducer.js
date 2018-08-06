/*
 *
 * CardsContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { FETCH_CARDS, LOAD_CARDS_SUCCESS } from './constants';

export const initialState = fromJS({});

function cardsContainerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CARDS_SUCCESS:
      return state.set('cards', action.cards.cards);
    default:
      return state;
  }
}

export default cardsContainerReducer;
