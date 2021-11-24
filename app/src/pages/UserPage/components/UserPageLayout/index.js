import React from 'react';
import PropTypes from 'prop-types';
import { Card, Box, Avatar, CircularProgress } from '@material-ui/core';

import styles from './style.module.scss';

const UserLayout = ({ isLoading, userInfo }) => {
  return (
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <Box>
            <h1>Profile Page</h1>
            <Box>
              <Card>
                <Avatar className={styles.avatar}>
                  {`${userInfo.firstName.charAt(0)}` +
                    `${userInfo.lastName.charAt(0)}`}
                </Avatar>
                <div>
                  <p>Personal data</p>
                  <p>{`${userInfo.firstName} ${userInfo.lastName}`}</p>
                  <p>{`Email: ${userInfo.email}`}</p>
                  <p>
                    {`Telephone: ${userInfo.phone}`}
                    <br />
                    {`Gender: ${userInfo.gender}`}
                  </p>
                </div>
              </Card>
            </Box>
          </Box>
        </div>
      )}
    </Box>
  );
};

UserLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  userInfo: PropTypes.object.isRequired,
};

export default UserLayout;
