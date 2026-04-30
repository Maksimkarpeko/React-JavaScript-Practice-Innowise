import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { RouterPath } from '@shared/constants';
import { setUser } from '../store/authSlice';
import { validationConfig } from '../config/validation-config';
import { useAddUserMutation, useLoginUserMutation } from '../api/authApi';

export const useAuth = () => {
  const [searchParams] = useSearchParams();
  const authParams = searchParams.get('mode');
  const [addUser] = useAddUserMutation();
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState(validationConfig);

  const isFormInvalid =
    Object.values(errors).some((fieldRules) =>
      Object.values(fieldRules).some((rule) => rule.isAction),
    ) ||
    !value.username.trim() ||
    !value.password.trim();

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();

    if (isFormInvalid) {
      console.error('Attempt to send invalid form');
      return;
    }

    try {
      const response = await addUser(value).unwrap();
      dispatch(setUser({ user: response }));
      localStorage.setItem('user', JSON.stringify(response));
      navigate('/' + RouterPath.dashboards);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUser(value).unwrap();
      dispatch(setUser({ user: response }));
      localStorage.setItem('user', JSON.stringify(response));
      navigate('/' + RouterPath.dashboards);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleOnChange = (event) => {
    const { name, value: inputValue } = event.target;

    setValue((prev) => ({
      ...prev,
      [name]: inputValue,
    }));

    const fieldConfig = validationConfig[name];

    if (fieldConfig) {
      const updateFieldConfig = {};

      Object.keys(fieldConfig).forEach((rulesName) => {
        const rule = fieldConfig[rulesName];
        const isValid = rule.isValid(inputValue);

        updateFieldConfig[rulesName] = {
          ...rule,
          isAction: !isValid,
        };
      });

      setErrors((prev) => ({
        ...prev,
        [name]: updateFieldConfig,
      }));
    }
  };

  return [
    authParams,
    handleLoginSubmit,
    handleRegistrationSubmit,
    handleOnChange,
    value,
    errors,
    isFormInvalid,
  ];
};
