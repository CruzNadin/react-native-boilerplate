import actionTypes from '@/store/actionTypes';

const initialState = {
  heartBeat: true,
};

export const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.HEART_BEAT:
      return {
        ...state,
        heartBeat: action.payload,
      };
    default:
      return state;
  }
};
