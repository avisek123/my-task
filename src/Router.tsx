import React from 'react';
import {PrivateRoutes, PublicRoutes} from './routes';
const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  return <>{isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />}</>;
};

export default Router;
