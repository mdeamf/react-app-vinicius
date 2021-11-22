import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { LOADING } from '../../redux/actions/LoadingAction';
import { DO_LOGIN } from '../../redux/actions/LoginActions';
import {theme} from '../../global/styles/theme';

const  HomeScreen = props => {

  const dispatch = useDispatch();
  const Loading = (ligaDesl) => dispatch({type: LOADING, isLoading: ligaDesl});
  const state = useSelector((state) => state.login);
  console.log(state)

  //Para ir para a tela de Login o app desloga o usuário
  const ToLogin = () => {
    Loading(true);

    setTimeout(() => {
      dispatch({
        type: DO_LOGIN,
        isLoggedIn: false,
        user: ''
      });
      Loading(false);
      
    }, 3000);    
  };

  return (
    <View style={styles.home }>
      <Text style={styles.titulo}>Bem vindo {state.user} </Text>
      <Button style={styles.button} mode="contained" onPress={ToLogin}>Login</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-around',
    backgroundColor: theme.colors.ui.secondary
  },

  titulo: {
    fontSize: theme.fontSizes.lg,
    color: 'black'
  },

  button:{
    width: 200,
    height: 60,
    justifyContent: 'center'
  }

});

export default HomeScreen;