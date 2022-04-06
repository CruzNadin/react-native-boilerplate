import actionTypes from '@/store/actionTypes';

const initialState = {
  language: 'en',
};

export const settingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LANGUAGE_CHANGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
