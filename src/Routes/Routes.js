import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import LoginRoutes from './LoginRoutes';
import AppRoutes from './AppRoutes';


const Routes = () => {
  const state = useSelector((state) => state.login);
  return (
    <NavigationContainer>
      {!state.isLoggedIn ? <LoginRoutes/> : <AppRoutes/>}
    </NavigationContainer>
  );
};

export default Routes;

