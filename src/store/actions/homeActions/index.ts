import {store} from '@/store';
import actionTypes from '@/store/actionTypes';

export const heartBeat = () => {
  store.dispatch({
    type: actionTypes.HEART_BEAT,
    payload: 'heart beat',
  });
};
