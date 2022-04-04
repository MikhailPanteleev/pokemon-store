import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import Loading from '../../../../commonComponents/Loading';

import styles from './style.module.scss';

const LoginPageLayout = ({
  handleChange,
  formValue,
  handleSubmit,
  isLoading,
  error,
  handleClick,
  open,
  handleClickAlert,
  handleClose,
}) => {
  return (
    <Box>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <form className={styles.wrapper} actions='' onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <Box className={styles.inputWrapper}>
              <TextField
                value={formValue.email}
                name='email'
                type='email'
                onChange={handleChange}
                label='Email'
              />
            </Box>
            <Box className={styles.inputWrapper}>
              <TextField
                value={formValue.password}
                name='password'
                type='password'
                onChange={handleChange}
                label='Password'
              />
            </Box>
            <Box className={styles.inputWrapper}>
              <Button
                type='submit'
                variant='filled'
                color='primary'
                children='LOGIN'
                onClick={handleClickAlert}
              />
            </Box>
            <Box className={styles.inputWrapper}>
              <Button
                variant='filled'
                color='primary'
                onClick={handleClick}
                children='registration'
              />
            </Box>
          </form>
          <Snackbar onClose={handleClose} autoHideDuration={2000} open={open}>
            <Alert severity='error'>{error}</Alert>
          </Snackbar>
        </div>
      )}
    </Box>
  );
};

LoginPageLayout.propTypes = {
  formValue: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoginPageLayout;
