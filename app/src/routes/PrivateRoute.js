import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {ROUTES} from './routeNames'

const PrivateRoute = ({component: Component, ...rest}) => {
   const {isAuth} = useSelector((state) => state.auth);

   return (
      <Route
         {...rest}
         render={(props) =>
            !isAuth ? <Redirect to={ROUTES.LOGIN_PAGE}/> : <Component {...props} />
         }
      />
   );
};


export default PrivateRoute;