import { useMemo, useState } from 'react';

export const useValidateForm = (form: string): boolean => {
  const [isValid, setIsValid] = useState(false);

  useMemo(() => {
    if (form.length < 50 || form.length > 400) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [form.length]);

  return isValid;
};
