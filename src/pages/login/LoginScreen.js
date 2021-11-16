import React from 'react';
import { TextInput, Provider, Snackbar  } from 'react-native-paper';
import { Formik, useFormik } from 'formik';

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
  LoginText,
  ModalPassword,
  LoginCheckBox
} from './LoginScreen.styles';

const LoginScreen = props => {
  const [checked, setChecked] = React.useState(false);
  const [sendEmail, setSendEmail] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onSendEmail = () => {
    hideModal;
    setSendEmail(true);
    console.log(sendEmail);
  };
  const onDismissSendEmail = () => setSendEmail(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      senha: '',
      remember: false,
      emailRecover: '',
    },
    onSubmit: values => {
      console.log(values)
    }
  });

  function onSubmit(values, actions) {
    console.log(values)

  };

  return (
    <Provider>
      <ModalPassword visible={visible} onDismiss={hideModal}>
        <LoginTitle title='Esqueci minha senha' />
        <LoginText>Digite seu email cadastrado no sistema que iremos te enviar uma senha temporária</LoginText>
        <InputContainer>
          <LoginInput
            label='Email'
            placeholder='Digite seu email'
            value={formik.values.emailRecover}
            onChangeText={formik.handleChange('emailRecover')}
            onBlur={formik.handleBlur('emailRecover')}
            left={<TextInput.Icon name='email-outline' />}
            keyboardType='email-address'
          />
        </InputContainer>
        <LoginButton mode='contained' onPress={onSendEmail}>Enviar</LoginButton>
      </ModalPassword>

      <LoginPage>
        <LoginScroll>
          <LoginCard elevation={5}>
            <LoginTitle title='Login' />
            <LoginContent>
              <FormikContainer>
                <InputContainer>
                  <LoginInput
                    label='Email'
                    placeholder='Digite seu email'
                    value={formik.values.email}
                    onChangeText={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    left={<TextInput.Icon name='email-outline' />}
                    keyboardType='email-address'
                  />
                  <LoginInput
                    label='Senha'
                    value={formik.values.senha}
                    onChangeText={formik.handleChange('senha')}
                    onBlur={formik.handleBlur('senha')}
                    placeholder='Digite sua senha'
                    left={<TextInput.Icon name='lock-outline' />}
                    keyboardType='numeric'
                    secureTextEntry={true}
                  />
                  <LoginCheckBox 
                    text='Lembrar minha senha' 
                    status= {formik.values.remember ? 'checked' : 'unchecked'}   
                    onPress={() => {
                      formik.values.remember = !formik.values.remember
                    }}    
                    
                  />
                </InputContainer>
                <LoginButton mode='contained' onPress={formik.handleSubmit}>Login</LoginButton>
                <ButtonPass onPress={showModal}>Esqueci minha senha</ButtonPass>
                <LoginText>Não é um membro ainda?
                  <LoginText style={{ color: '#754F96' }}> Faça o cadastro.</LoginText>
                </LoginText>
              </FormikContainer>
            </LoginContent>
          </LoginCard>
          <Snackbar 
            visible={sendEmail} 
            onDismiss={onDismissSendEmail} 
            action={{
              label: 'OK',
              onPress: () => {
                onDismissSendEmail
              }
            }}>Email enviado</Snackbar>
        </LoginScroll>
      </LoginPage>
    </Provider>
  );
}


export default LoginScreen;