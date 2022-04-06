import {combineReducers, applyMiddleware, createStore} from 'redux';
import {userReducer, settingsReducer} from '@/store/reducers';

import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
  userReducer,
  settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
