import React from 'react';
import { TextInput } from 'react-native-paper';
import BtnCheckbox from '../../components/BtnCheckbox';
import { Formik } from 'formik';

import { 
  LoginButton, 
  ButtonPass, 
  LoginCard, 
  LoginTitle, 
  FormikContainer, 
  LoginPage, 
  LoginInput, 
  InputContainer, 
  LoginScroll, 
  LoginContent, 
  LoginText } from './LoginScreen.styles';

const LoginScreen = props => {

  function onSubmit(values, actions) {
    console.log(values)

  };

  return (
    <LoginPage>
      <LoginScroll>
        <LoginCard elevation={5}>
          <LoginTitle title='Login' />
          <LoginContent>
            <Formik
              initialValues={{ email: '', senha: '', remember: false }}
              onSubmit={onSubmit}
            >
              {(props) => (
                <FormikContainer>
                  <InputContainer>
                    <LoginInput
                      label='Email'
                      placeholder='Digite seu email'
                      value={props.values.email}
                      onChangeText={props.handleChange('email')}
                      onBlur={props.handleBlur('email')}
                      left={<TextInput.Icon name='email-outline' />}
                      keyboardType='email-address'
                    />
                    <LoginInput
                      label='Senha'
                      value={props.values.senha}
                      onChangeText={props.handleChange('senha')}
                      onBlur={props.handleBlur('senha')}
                      placeholder='Digite sua senha'
                      left={<TextInput.Icon name='lock-outline' />}
                      keyboardType='numeric'
                    />
                    <BtnCheckbox text='Lembrar minha senha' status='checked' />
                  </InputContainer>
                  <LoginButton mode='contained' onPress={props.handleSubmit}>Login</LoginButton>
                  <ButtonPass onPress={() => {}}>Esqueci minha senha</ButtonPass>
                  <LoginText>Não é um membro ainda?
                    <LoginText style={{ color: '#754F96' }}> Faça o cadastro.</LoginText>
                  </LoginText>
                </FormikContainer>
              )}
            </Formik>
          </LoginContent>
        </LoginCard>
      </LoginScroll>
    </LoginPage>
  );
}


export default LoginScreen;