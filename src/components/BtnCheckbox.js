import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import {theme} from '../global/styles/theme';

const BtnCheckbox = props => {

  return (
    <View style={styles.checkBoxContainer}>
      <Checkbox {...props}
        style={styles.checkBox} 
        color={theme.colors.ui.primary} 
        />
      <Text style={styles.textCheckbox}>{props.text}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  checkBoxContainer: {
    flexDirection: 'row',    
  },

  checkBox: {
    alignSelf: 'center'
  },

  textCheckbox :{
    margin: 8
  }

});

export default BtnCheckbox;





