import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { AuthResponse } from './auth.types';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: builder => ({
    login: builder.mutation<AuthResponse, { email: string; password: string }>({
      query: credentials => ({
        url: '/api/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<
      AuthResponse,
      { email: string; password: string; name: string }
    >({
      query: credentials => ({
        url: '/api/auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
