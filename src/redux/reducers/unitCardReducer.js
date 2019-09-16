import { SAVE_UNIT_CARD_CONFIG } from '../actions/types';

const initialState = {
    item: {}
};

export default function(state = initialState, action){
  switch(action.type){
    case SAVE_UNIT_CARD_CONFIG:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
}