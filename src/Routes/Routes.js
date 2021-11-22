import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import LoginRoutes from './LoginRoutes';
import AppRoutes from './AppRoutes';

const Routes = () => {
  //Verifica se o Login foi feito, caso não tenha sido feito irá para a tela de Login, senão irá para a tela Home do APP
  const state = useSelector((state) => state.login);
  return (
    <NavigationContainer>
      {!state.isLoggedIn ? <LoginRoutes/> : <AppRoutes/>}
    </NavigationContainer>
  );
};

export default Routes;

