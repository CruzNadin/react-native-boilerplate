import {combineReducers, applyMiddleware, createStore} from 'redux';
import {homeReducer} from '@/store/reducers/homeReducer';

import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
  homeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
