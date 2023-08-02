import { useMemo } from 'react';
import { object, string } from 'yup';

export function useCreateFormValidation() {
  return useMemo(() => {
    return object().shape({
      username: string().required('Required').min(2).max(30),
    });
  }, []);
}
