import { ADD_TO_HISTORY, REMOVE_FROM_HISTORY, UPDATE_ACTIVE } from '../actions/types';

function history(state = { list: [], active: '' }, action) {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return {
        list: [ { ...action.payload },
        ...state.list ],
        active: action.payload.id
      };

    case REMOVE_FROM_HISTORY:
      let newList = state.list.filter((item) => {
          return item.id !== action.payload;
        });
      return { list: newList, active: '' };

    case UPDATE_ACTIVE:
      return { ...state, active: action.payload };

    default:
      return state;
  }
}

export default history;
