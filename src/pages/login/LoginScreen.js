import React from 'react';
import { TextInput, Provider, Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { DO_LOGIN, SEND_EMAIL } from '../../redux/actions/LoginActions';
import { LOADING } from '../../redux/actions/LoadingAction';
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

const LoginScreen = () => {
  const [userRemember, setUserRemember] = React.useState(false);
  const [disableButton, setDisableButton] = React.useState(true);
  const [visible, setVisible] = React.useState(false);
  const [passSecurity, setPassSecurity] = React.useState(false);
  const [passIcon, setPassIcon] = React.useState('eye-off')

  const state = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const Loading = (ligaDesl) => dispatch({ type: LOADING, isLoading: ligaDesl });

  const ChangeIcon = () => {
    setPassSecurity(!passSecurity);
    setPassIcon(passIcon == 'eye' ? 'eye-off' : 'eye');
  };

  const onSendEmail = (email) => {
    dispatch({
      type: SEND_EMAIL,
      isSendEmail: true,
      email: email
    })
  };

  const onDismissSendEmail = () => {
    dispatch({
      type: SEND_EMAIL,
      isSendEmail: false,
      email: ''
    })
  };
  // Grava o Login no Redux
  const doLogin = (user) => {
    Loading(true);
    setTimeout(() => {
      dispatch({
        type: DO_LOGIN,
        isLoggedIn: true,
        user: user
      });
      Loading(false);

    }, 3000);
  };

  //validação dos campos do Login
  const loginValidate = yup.object({
    user: yup.string()
      .matches(/^[A-Za-z0-9]+$/, 'Não utilizar caracteres especiais')
      .min(1, 'O login deve ter no mínimo 1 caracter')
      .required('Esse campo é obrigatório'),

    password: yup.string()
      .required('Esse campo é obrigatório')
      .matches(/^[0-9]+$/, 'Utlizar apenas números')
      .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  })
  //validação dos campos do esqueci a minha senha
  const emailValidation = yup.object({
    email: yup.string()
      .email('Esse não é um e-mail válido')
  })
  //Submit do Login
  const loginFormik = useFormik({
    initialValues: {
      user: '',
      password: '',
      userRemember: false,
    },
    onSubmit: values => {
      doLogin(values.user);
    },
    validationSchema: loginValidate
  });
  // Submit do esqueci a senha
  const emailFormik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: values => {
      onSendEmail(values.email);
      hideModal;
    },
    validationSchema: emailValidation
  });

  //atualiza a página para habilitar o botão de login
  React.useEffect(() => {
    setDisableButton(onDisableButton);
  });

  // função verifica as validações dos campos de login para retornar se o cmapo deve ser habilitado ou não.
  const onDisableButton = () => {
    if (Object.keys(loginFormik.errors).length !== 0 || loginFormik.values.user === '' || loginFormik.values.password === '') {
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
          value={emailFormik.values.email}
          onChangeText={emailFormik.handleChange('email')}
          onBlur={emailFormik.handleBlur('email')}
          left={<TextInput.Icon name='email-outline' />}
          keyboardType='email-address'
        />
        {emailFormik.errors.email && <LoginError type='error'>{emailFormik.errors.email}</LoginError>}
        <LoginButton
          mode='contained'
          disabled={Object.keys(emailFormik.errors).length !== 0 || emailFormik.values.email === ''}
          onPress={emailFormik.handleSubmit}
        >
          Enviar
        </LoginButton>
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
                    label='Usuário'
                    placeholder='Digite seu usuário'
                    value={loginFormik.values.user}
                    onChangeText={loginFormik.handleChange('user')}
                    onBlur={loginFormik.handleBlur('user')}
                    left={<TextInput.Icon name='account-circle-outline' />}
                  />
                  {loginFormik.errors.user && <LoginError type='error'>{loginFormik.errors.user}</LoginError>}
                  <LoginInput
                    label='Senha'
                    value={loginFormik.values.password}
                    onChangeText={loginFormik.handleChange('password')}
                    onBlur={loginFormik.handleBlur('password')}
                    placeholder='Digite sua senha'
                    left={<TextInput.Icon name='lock-outline' />}
                    keyboardType='numeric'
                    secureTextEntry={passSecurity}
                    right={<TextInput.Icon name={passIcon} onPress={ChangeIcon}/>}
                  />
                  {loginFormik.errors.password && <LoginError type='error'>{loginFormik.errors.password}</LoginError>}

                  <LoginCheckBox
                    text='Lembrar minha senha'
                    status={userRemember ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setUserRemember(!userRemember);
                      loginFormik.values.userRemember = userRemember
                    }}
                  />
                </InputContainer>
                <LoginButton mode='contained' disabled={disableButton} onPress={loginFormik.handleSubmit}>Login</LoginButton>
                <ButtonPass onPress={showModal}>Esqueci minha senha</ButtonPass>
                <LoginText>Não é um membro ainda?
                  <LoginText style={{ color: '#754F96' }}> Faça o cadastro.</LoginText>
                </LoginText>
              </FormikContainer>
            </LoginContent>
          </LoginCard>
          <Snackbar
            visible={state.isSendEmail}
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