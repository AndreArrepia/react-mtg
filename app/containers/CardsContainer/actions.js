/*
 *
 * CardsContainer actions
 *
 */

import { FETCH_CARDS, LOAD_CARDS_SUCCESS } from './constants';

export function defaultAction() {
  return {
    type: FETCH_CARDS,
  };
}

export function LoadCardsSuccessAction(cards) {
  return {
    type: LOAD_CARDS_SUCCESS,
    cards,
  };
}
