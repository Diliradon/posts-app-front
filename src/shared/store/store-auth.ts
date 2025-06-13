import { configureStore } from '@reduxjs/toolkit';

import { authApi } from '../../entities/auth/auth.api';

export const storeAuth = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof storeAuth.getState>;
export type AppDispatch = typeof storeAuth.dispatch;
