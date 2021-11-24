import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Snackbar,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  CircularProgress,
  InputLabel,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import styles from './style.module.scss';

const SignupPageLayout = ({
  handleChange,
  formValue,
  handleSubmit,
  isLoading,
  error,
  handleClick,
  open,
  handleClose,
  handleClickAlert,
}) => {
  return (
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <form actions='' onSubmit={handleSubmit} className={styles.wrapper}>
            <h1>SIGNUP</h1>
            <TextField
              className={styles.inputWrapper}
              value={formValue.email}
              name='email'
              type='email'
              onChange={handleChange}
              label='Email'
            />
            <TextField
              className={styles.inputWrapper}
              value={formValue.password}
              name='password'
              type='password'
              onChange={handleChange}
              label='Password'
            />
            <TextField
              className={styles.inputWrapper}
              gender={formValue.passwordConfirmation}
              name='passwordConfirmation'
              type='password'
              onChange={handleChange}
              label='Confirm the password'
            />
            <TextField
              className={styles.inputWrapper}
              value={formValue.firstName}
              name='firstName'
              type='text'
              onChange={handleChange}
              label='First Name'
            />
            <TextField
              className={styles.inputWrapper}
              value={formValue.lastName}
              name='lastName'
              type='text'
              onChange={handleChange}
              label='Last Name'
            />
            <TextField
              className={styles.inputWrapper}
              value={formValue.phone}
              name='phone'
              type='phone'
              onChange={handleChange}
              label='Phone Number'
            />
            <Box className={styles.formControlWrapper}>
              <FormControl>
                <InputLabel>Gender</InputLabel>
                <Select
                  value={formValue.gender}
                  name='gender'
                  label='Gender'
                  onChange={handleChange}
                >
                  <MenuItem value={'male'}>Male</MenuItem>
                  <MenuItem value={'female'}>Female</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className={styles.inputWrapper}>
              <Button
                type='submit'
                variant='filled'
                color='primary'
                children='signup'
                onClick={handleClickAlert}
              ></Button>
            </Box>
            <Box className={styles.inputWrapper}>
              <Button onClick={handleClick} children='Authorization'></Button>
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

SignupPageLayout.propTypes = {
  formValue: PropTypes.objectOf(
    PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
      passwordConfirmation: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      phone: PropTypes.string,
      gender: PropTypes.string,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
};

export default SignupPageLayout;
