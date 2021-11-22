import styled from 'styled-components/native';
import {theme} from '../../global/styles/theme';
import {View, Text, Image} from 'react-native';
import { Card, TextInput, Button, HelperText } from 'react-native-paper';
import BtnCheckbox from '../../components/BtnCheckbox';
import LinearGradient from 'react-native-linear-gradient'
import FormModal from '../../components/Modals/FormModal';

//Background da aplicação
export const LoginPage = styled(LinearGradient).attrs({
  colors: [theme.colors.ui.primary, theme.colors.ui.secondary],
  useAngle: true,
  angleCenter: {x: 0.5, y: 0.5},
})`
  flex: 1;  
`;

export const LoginScroll = styled(View).attrs({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
})``;

//Card do login
export const LoginCard = styled(Card)`
  width: 350px;
  height: 650px; 
`;

// Conteudo do card de Login
export const LoginContent = styled(Card.Content)`
  align-items: center;
`;

//Conteudo do Título
export const ContainerTitle = styled(View)`
  align-items: center;
`;

//Logo da aplicação
export const LoginLogo = styled(Image)`
  width: 70px;
  height: 70px;
`;

//Titulo do Login
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

//Conteudo do formulário
export const FormikContainer = styled(View)`
  width: 100%;
  height: 90%; 
  justify-content: space-between;  
`;

// conteudo dos imputs
export const InputContainer = styled(View)`
  height: 200px; 
  justify-content: space-around;
`;

//Inputs
export const LoginInput = styled(TextInput)`
height: 60px;
font-family: ${theme.fonts.ss};
font-size: 20px;
`;

export const LoginCheckBox = styled(BtnCheckbox)``;

//Bottão de Login
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

// Texto padrão
export const LoginText = styled(Text)`
  font-family: ${theme.fonts.ss};
  font-size: 15px;
  text-align: center;
`;

//Botão de cadastar um novo usuário
export const ButtonNew = styled(Button).attrs({
  mode: 'text',
})`

`;

//Botão para a tela de esqueci minha senha
export const ButtonPass = styled(Button).attrs({
  mode: 'text',
})`

`;

//tela do Modal
export const ModalPassword = styled(FormModal).attrs({
  contentContainerStyle: {
    width: '90%',
    height: '60%',
    justifyContent: 'space-evenly'
  }
})``;

// Textos de erros
export const LoginError = styled(HelperText)`
 
`;





