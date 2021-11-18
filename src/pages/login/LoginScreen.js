import React from 'react';
import { TextInput, Provider, Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';


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
  LoginCheckBox,
  LoginLogo,
  ContainerTitle,
  LoginError
} from './LoginScreen.styles';
import { createIconSetFromFontello } from 'react-native-vector-icons';

const LoginScreen = () => {
  const [checked, setChecked] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(true);
  const [sendEmail, setSendEmail] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onSendEmail = () => {
    hideModal;
    setSendEmail(true);
    console.log(sendEmail);
  };
  const onDismissSendEmail = () => setSendEmail(false)

  React.useEffect(() => {
    setDisableButton(onDisableButton);
  });

  const validateSchema = yup.object({
    login: yup.string()
      .matches(/^[A-Za-z0-9]+$/, 'Não utilizar caracteres especiais')
      .min(1, 'O login deve ter no mínimo 1 caracter')
      .required('Esse campo é obrigatório'),       

    senha: yup.string()
      .required('Campo Obrigatótio')
      .matches(/^[0-9]+$/, 'Utlizar apenas números')
      .min(6, 'A senha deve ter no mínimo 6 caracteres'),

    email: yup.string()
      .email('Esse não é um e-mail válido')
  })

  const formik = useFormik({
    initialValues: {
      login: '',
      senha: '',
      remember: false,
      email: '',
    },
    onSubmit: values => {
      console.log(values)
    },
    validationSchema: validateSchema
  });

  const onDisableButton = () => {
    if (Object.keys(formik.errors).length !== 0 || formik.values.login === '' || formik.values.senha ===''){
      return true;
    } else {
      return false;
    }
  }

  return (
    <Provider>
      <ModalPassword visible={visible} onDismiss={hideModal}>
        <LoginTitle title='Esqueci minha senha' />
        <LoginText>Digite seu email cadastrado no sistema que iremos te enviar uma senha temporária</LoginText>
        <LoginInput
          label='Email'
          placeholder='Digite seu email'
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          left={<TextInput.Icon name='email-outline' />}
          keyboardType='email-address'
        />
        {formik.errors.email && <LoginError type='error'>{formik.errors.email}</LoginError>}
        <LoginButton mode='contained' disabled={Object.keys(formik.errors).length !== 0 || formik.values.login === '' } onPress={onSendEmail}>Enviar</LoginButton>
      </ModalPassword>

      <LoginPage>
        <LoginScroll>
          <LoginCard elevation={5}>
            <ContainerTitle>
              <LoginLogo
                source={require('../../Images/logo.png')}
              />
              <LoginTitle title='Login' />
            </ContainerTitle>
            <LoginContent>
              <FormikContainer>
                <InputContainer>
                  <LoginInput
                    label='Login'
                    placeholder='Digite seu login'
                    value={formik.values.login}
                    onChangeText={formik.handleChange('login')}
                    onBlur={formik.handleBlur('login')}
                    left={<TextInput.Icon name='account-circle-outline' />}
                  />
                  {formik.errors.login && <LoginError type='error'>{formik.errors.login}</LoginError>}
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
                  {formik.errors.senha && <LoginError type='error'>{formik.errors.senha}</LoginError>}

                  <LoginCheckBox
                    text='Lembrar minha senha'
                    status={formik.values.remember ? 'checked' : 'unchecked'}
                    onPress={() => {
                      formik.values.remember = !formik.values.remember
                    }}

                  />
                </InputContainer>
                <LoginButton mode='contained' disabled={disableButton} onPress={onDisableButton}>Login</LoginButton>
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