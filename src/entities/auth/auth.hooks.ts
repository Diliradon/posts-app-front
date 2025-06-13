import { useLoginMutation, useRegisterMutation } from './auth.api';

export const useLogin = () => {
  const [login, { isLoading, error }] = useLoginMutation();

  return { login, isLoading, error };
};

export const useRegister = () => {
  const [register, { isLoading, error }] = useRegisterMutation();

  return { register, isLoading, error };
};
