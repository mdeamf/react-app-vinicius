import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const  LoginScreen = props => {
  return (
    <View style={styles.login}>
      <Text>Login Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }

});

export default LoginScreen;