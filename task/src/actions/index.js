import uuidv4 from 'uuid/v4';
import { ADD_TO_HISTORY, REMOVE_FROM_HISTORY, UPDATE_ACTIVE } from './types';

export const updateActive = (id) => {
  return {
    type: UPDATE_ACTIVE,
    payload: id
  };
};

// returning id so it can be pushed to update url
export const addToHistory = (keyword, url) => {
  return (dispatch) => {
    let id = uuidv4();
    dispatch({
      type: ADD_TO_HISTORY,
      payload: { id, keyword, url },
    });

    return id;
  }
};

export const removeFromHistory = (id) => {
  return {
    type: REMOVE_FROM_HISTORY,
    payload: id
  };
};
