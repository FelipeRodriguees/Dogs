import { func } from 'prop-types';
import React, { useState } from 'react';

const validTypes = {
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    messageError: 'Preencha um email válido',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  function validate(value) {
    if (type == false) {
      return true;
    } else if (value.length === 0) {
      setError('O campo não pode ser vazio');
      return false;
    } else if (validTypes[type] && !validTypes[type].regex.test(value)) {
      setError(validTypes[type].messageError);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    error,
  };
};

export default useForm;
