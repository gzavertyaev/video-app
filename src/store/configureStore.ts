import { configureStore, combineReducers } from '@reduxjs/toolkit';
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

import rootReducer from './rootReducer';

export const rootPersistConfig = {
  key: 'root',
  storage,
  // Add here all store nodes, that should be persisted
  whitelist: [],
};

function configureAppStore(preloadedState: any) {
  const customizeMiddleware = (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredActionPaths: [],
        ignoredPaths: [],
      },
      immutableCheck: process.env.NODE_ENV === 'development',
    });

  const reducer = combineReducers({
    ...rootReducer,
  });

  const persistedReducer = persistReducer(rootPersistConfig, reducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: customizeMiddleware,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    enhancers: [],
  });

  const persistor = persistStore(store);

  return { store, persistor };
}

export const { persistor, store } = configureAppStore({});

export type RootState = ReturnType<typeof store.getState>;
