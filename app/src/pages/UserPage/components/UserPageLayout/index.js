import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {
  Box,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from '@material-ui/core';

import Loading from '../../../../commonComponents/Loading';

import styles from './style.module.scss';

const UserLayout = ({ isLoading, userInfo, ordersList }) => {
  return (
    <Box className={styles.wrapper}>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Box className={styles.wrapperProfile}>
            <h1>Profile Page</h1>
            <div>
              <p>Name: {userInfo.firstName}</p>
              <p>Last name: {userInfo.lastName}</p>
              <p>Email: {userInfo.email}</p>
              <p>Telephone: {userInfo.phone}</p>
              <p>Gender: {userInfo.gender}</p>
            </div>
          </Box>

          {ordersList?.map((order) => (
            <Box key={order._id} className={styles.pokemonCard}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Pokemon name</TableCell>
                      <TableCell>Image</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Quantity</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {order.itemsList?.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                          <img src={item.image} />
                        </TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box>
                <h3>
                  Total Price: {order.totalPrice} Data:{' '}
                  <Moment format='YYYY/MM/DD'>{order.createdAt}</Moment>
                </h3>
                <h3></h3>
              </Box>
            </Box>
          ))}
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
