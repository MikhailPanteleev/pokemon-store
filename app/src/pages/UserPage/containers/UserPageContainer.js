import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserLayout from '../components/UserPageLayout';
import { GET_ORDER_REQUEST } from '../actions';

const UserPageContainer = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.userPage);
  const { userInfo } = useSelector((state) => state.auth);
  const { itemsList, totalPrice, ordersList } = useSelector(
    (state) => state.userPage
  );

  useEffect(() => {
    dispatch(GET_ORDER_REQUEST());
  }, [dispatch]);

  return (
    <UserLayout
      isLoading={isLoading}
      userInfo={userInfo}
      itemsList={itemsList}
      totalPrice={totalPrice}
      ordersList={ordersList}
    />
  );
};

export default UserPageContainer;
