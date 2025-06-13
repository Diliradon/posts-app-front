'use client';

import { ReactNode } from 'react';

import { storeAuth } from '@shared/store/store-auth';
import { Provider } from 'react-redux';

interface ReduxProviderProps {
  children: ReactNode;
}

export const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={storeAuth}>{children}</Provider>;
};
