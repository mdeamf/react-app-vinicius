import styled from 'styled-components/native';
import {styles} from '../../global/styles/styles';
import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-paper';


export const Login = styled(ScrollView).attrs({
  contentContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
})`
`;

export const LoginPage= styled.View`
  background-color:  ${styles.colors.ui.primary}; 

  flex: 1;
`;

export const LoginContent = styled(Card.Content)`
 align-items: center;
`;

export const LoginTitle= styled(Card.Title).attrs({
  titleStyle: {
    fontSize: 20,
    fontFamily: styles.fonts.ss,
  }
})` 
  padding: 10px;
`;

export const InputContainer = styled.View`
  width: 95%;
  height: 35%;
  justify-content: space-around;
  background-color: ${styles.colors.ui.secondary};
  
`;

export const LoginCard = styled(Card)`
  width: 90%;
  height: 90%;
`;



