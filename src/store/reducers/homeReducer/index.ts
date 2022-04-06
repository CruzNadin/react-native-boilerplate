import actionTypes from '@/store/actionTypes';

const initialState = {
  userProfile: [],
};

export const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
};
