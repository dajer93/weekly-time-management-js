import {
  UPDATE_WEEK,
  REMOVE_TASK,
  ADD_TASK
} from '../actionTypes';

export function updateWeek(payload) {
  return {
      type: UPDATE_WEEK,
      payload: payload
  }
}

export function removeTask(payload) {
  return {
      type: REMOVE_TASK,
      payload: payload
  }
}

export function addTask(payload) {
  return {
      type: ADD_TASK,
      payload: payload
  }
}
