import {combineReducers, applyMiddleware, createStore} from 'redux';
import {homeReducer} from '@/store/reducers/homeReducer';
import {settingsReducer} from '@/store/reducers/settingsReducer';

import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
  homeReducer,
  settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
