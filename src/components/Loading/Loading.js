import React from 'react';
import { ActivityIndicator, Text } from 'react-native-paper';
import {LoadingContainer, LoadingLogo} from './Loading.style'

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingLogo source={require('../../Images/logo.png')}/>
      <ActivityIndicator  animating={true} size={75}/>
    </LoadingContainer>    
  )
};

export default Loading;





