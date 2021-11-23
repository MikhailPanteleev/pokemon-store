import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SignupPageLayout from '../components/SignupPageLayout';
import useForm from '../../../hooks/useForm';
import { SIGNUP_REQUEST } from '../actions';
import { ROUTES } from '../../../routes/routeNames';

const SignupPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = useState(false);

  const { isLoading, error, isSignup } = useSelector((state) => state.signup);

  const [formData, handleChange] = useForm({
    email: '',
    password: '',
    passwordConfirmation: '',
    firstName: '',
    lastName: '',
    phone: '',
    gender: '',
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const User = {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        gender: formData.gender,
      };
      if (formData.password === formData.passwordConfirmation) {
        dispatch(SIGNUP_REQUEST(User));
      }
    },
    [dispatch, formData]
  );

  const handleClick = useCallback(() => {
    history.push(ROUTES.LOGIN_PAGE);
    setOpen(true);
  }, [dispatch]);

  const handleClickAlert = useCallback(() => {
    setOpen(true);
  });

  useEffect(() => {
    if (isSignup) {
      history.push(ROUTES.LOGIN_PAGE);
    }
  }, [isSignup]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <SignupPageLayout
      formValue={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
      handleClick={handleClick}
      open={open}
      handleClose={handleClose}
      handleClickAlert={handleClickAlert}
    />
  );
};

export default SignupPageContainer;
