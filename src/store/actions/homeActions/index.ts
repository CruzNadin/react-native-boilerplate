import {ProfileDto} from '@/models';
import {store} from '@/store';
import actionTypes from '@/store/actionTypes';

export const userProfile = (data: ProfileDto) => {
  store.dispatch({
    type: actionTypes.USER_PROFILE,
    payload: data,
  });
};
