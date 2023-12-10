import { configureStore } from '@reduxjs/toolkit';
import { noticesReducer } from './notices/noticesSlice';
import { filterReducer } from './filter/filterSlice';
import { favoritesReducer } from './favorites/favoritesSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(persistConfig, favoritesReducer),
    notices: noticesReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
