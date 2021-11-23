import React from 'react';
import NavBar from '../NavBar/index';
import { useSelector } from 'react-redux';

const MainLayout = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <div>
      {isAuth && <NavBar />}
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
