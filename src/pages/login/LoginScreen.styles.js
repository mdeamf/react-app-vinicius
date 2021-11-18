import styled from 'styled-components/native';
import {theme} from '../../global/styles/theme';
import {View, Text, Image} from 'react-native';
import { Card, TextInput, Button, HelperText } from 'react-native-paper';
import BtnCheckbox from '../../components/BtnCheckbox';
import LinearGradient from 'react-native-linear-gradient'
import FormModal from '../../components/Modals/FormModal';


export const LoginScroll = styled(View).attrs({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
})``;

export const LoginCheckBox = styled(BtnCheckbox)``;

export const LoginPage = styled(LinearGradient).attrs({
  colors: [theme.colors.ui.primary, theme.colors.ui.secondary],
  useAngle: true,
  angleCenter: {x: 0.5, y: 0.5},
})`
  flex: 1;  
`;

export const LoginContent = styled(Card.Content)`
  align-items: center;
`;

export const LoginTitle= styled(Card.Title).attrs({
  titleStyle: {
    fontSize: theme.fontSizes.lg,
    fontFamily: theme.fonts.ss,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})` 
  padding: 10px;
`;

export const InputContainer = styled(View)`
  height: 200px; 
  justify-content: space-around;
`;

export const LoginInput = styled(TextInput)`
height: 60px;
font-family: ${theme.fonts.ss};
font-size: 20px;
`;

export const FormikContainer = styled(View)`
  width: 100%;
  height: 90%; 
  justify-content: space-between;
  
`;

export const LoginButton = styled(Button).attrs({
  labelStyle: {
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fonts.ss,
    fontWeight: 'bold'
  },
  color: theme.colors.ui.primary
})`
  margin-top: 20px;
  justify-content: center;
  height: 60px;
`;

export const LoginText = styled(Text)`
  font-family: ${theme.fonts.ss};
  font-size: 15px;
  text-align: center;
`;

export const ButtonNew = styled(Button).attrs({
  mode: 'text',
})`

`;

export const ButtonPass = styled(Button).attrs({
  mode: 'text',
})`

`;

export const ContainerTitle = styled(View)`
  align-items: center;
`;

export const LoginLogo = styled(Image)`
  width: 70px;
  height: 70px;
`;

export const ModalPassword = styled(FormModal).attrs({
  contentContainerStyle: {
    width: '90%',
  }
})``;

export const LoginError = styled(HelperText)`
 
`;


export const LoginCard = styled(Card)`
  width: 350px;
  height: 650px; 
`;



