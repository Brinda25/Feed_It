import reducer from './history';
import { ADD_TO_HISTORY, REMOVE_FROM_HISTORY, UPDATE_ACTIVE } from '../actions/types';

describe('history reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        active: '',
        list: []
      }
    );
  });

  it('should handle ADD_TO_HISTORY', () => {
    const id = 'ed82f0f5-162e-4ced-8a04-2f8ea83f2b14';

    const mockHistoryState = {
      list: [],
      active: ''
    };
    const action = {
      type: ADD_TO_HISTORY,
      payload: { id, keyword: 'test', url: 'test.com' }
    };
    const expectedState = {
      list: [{ id, keyword: 'test', url: 'test.com' }],
      active: id
    };

    expect(reducer(mockHistoryState, action)).toEqual(expectedState);
  });

  it('should handle REMOVE_FROM_HISTORY', () => {
    // Mockup history state with two items
    // then try removing the first one
    const id1 = 'ed82f0f5-162e-4ced-8a04-2f8ea83f2b14';
    const id2 = 'ev11z7j7-215e-8xcz-1w30-6h1hjq1h6c39';

    const mockHistoryState = {
      list: [{ id: id1, keyword: 'test1', url: 'test1.com' }, { id: id2, keyword: 'test2', url: 'test2.com' }],
      active: id2
    };
    const action = {
      type: REMOVE_FROM_HISTORY,
      payload: id1
    };
    const expectedState = {
      list: [{ id: id2, keyword: 'test2', url: 'test2.com' }],
      active: ''
    };

    expect(reducer(mockHistoryState, action)).toEqual(expectedState);
  });

  it('should handle UPDATE_ACTIVE', () => {
    // Mockup history state with two items
    // then update active item
    const id1 = 'ed82f0f5-162e-4ced-8a04-2f8ea83f2b14';
    const id2 = 'ev11z7j7-215e-8xcz-1w30-6h1hjq1h6c39';

    const mockHistoryState = {
      list: [{ id: id1, keyword: 'test1', url: 'test1.com' }, { id: id2, keyword: 'test2', url: 'test2.com' }],
      active: id2
    };
    const action = {
      type: UPDATE_ACTIVE,
      payload: id1
    };
    const expectedState = {
      list: [{ id: id1, keyword: 'test1', url: 'test1.com' }, { id: id2, keyword: 'test2', url: 'test2.com' }],
      active: id1
    };

    expect(reducer(mockHistoryState, action)).toEqual(expectedState);
  });
});
