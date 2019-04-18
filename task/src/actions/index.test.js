import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { updateActive, removeFromHistory, addToHistory } from './index';
import { UPDATE_ACTIVE, REMOVE_FROM_HISTORY, ADD_TO_HISTORY } from './types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// testing whether the right action was returned
describe('history actions', () => {
  it('should create and dispatch an addToHistory action and return its random generated id', () => {
    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);

    // dispatch the action
    store.dispatch(addToHistory('tech', 'tech.com'));

    // test if store dispatched the expected action
    const action = store.getActions()[0];
    // action id is generated using uuid/v4
    const actionId = action.payload.id;

    const expectedPayload = {
      type: ADD_TO_HISTORY,
      payload: { id: actionId, keyword: 'tech', url: 'tech.com' }
    };

    expect(typeof actionId).toBe('string');
    expect(actionId.length).toBe(36);
    expect(action).toEqual(expectedPayload);
  });

  it('should create an action to update selected item', () => {
    const id = 1;
    const expectedAction = {
      type: UPDATE_ACTIVE,
      payload: id
    };
    expect(updateActive(id)).toEqual(expectedAction);
  });

  it('should create an action to remove keyword from history', () => {
    const id = 1;
    const expectedAction = {
      type: REMOVE_FROM_HISTORY,
      payload: id
    };
    expect(removeFromHistory(id)).toEqual(expectedAction);
  });
});
