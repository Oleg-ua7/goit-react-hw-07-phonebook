import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import logger from 'redux-logger';

// import {
//   persistStore,
//   persistReducer,
//   contactsPersistConfig,
//   middleware,
// } from './persistConfig';

import {
  contactsReducer,
  loadingReducer,
  errorReducer,
} from './contacts/contacts-reducer';
import { filterReducer } from './filter/filter-reducer';

const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  error: errorReducer,
  loading: loadingReducer,
};

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

export { store };
