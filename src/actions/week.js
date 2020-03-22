import {
  UPDATE_WEEK
} from '../actionTypes';

export function updateWeek(payload) {
  return {
      type: UPDATE_WEEK,
      payload: payload
  }
}
