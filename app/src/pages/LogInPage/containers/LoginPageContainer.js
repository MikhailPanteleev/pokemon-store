import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginPageLayout from '../components/LoginPageLayout';
import useForm from '../../../hooks/useForm';
import { LOGIN_REQUEST } from '../actions';
import { ROUTES } from '../../../routes/routeNames';

const LoginPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { isAuth, isLoading, error } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

  const [formData, handleChange] = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(LOGIN_REQUEST(formData));
    },
    [dispatch, formData]
  );

  const handleClick = useCallback(() => {
    history.push(ROUTES.SIGNUP_PAGE);
  }, [dispatch]);

  const handleClickAlert = useCallback(() => {
    setOpen(true);
  });

  useEffect(() => {
    if (isAuth) {
      history.push(ROUTES.POKEMONS_PAGE);
    }
  }, [isAuth]);

  const handleClose = useCallback((event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  });

  return (
    <LoginPageLayout
      formValue={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
      handleClick={handleClick}
      handleClose={handleClose}
      open={open}
      handleClickAlert={handleClickAlert}
    />
  );
};

export default LoginPageContainer;
