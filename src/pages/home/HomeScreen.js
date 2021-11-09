import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const  HomeScreen = props => {
  return (
    <View style={styles.home }>
      <Text>Home Screen</Text>
      <Button title="Login" onPress={() => props.navigation.navigate('Login')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }

});

export default HomeScreen;