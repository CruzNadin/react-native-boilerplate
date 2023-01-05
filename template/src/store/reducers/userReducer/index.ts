import actionTypes from '@/store/actionTypes';

const initialState = {
  userProfile: null,
};

export const userReducer = (state = initialState, action: any) => {
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
