import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Checkbox, Button  } from 'react-native-paper';
import { Formik } from 'formik';

import { Login, LoginCard, LoginTitle, LoginContent, LoginPage, InputContainer } from './LoginScreen.styles';

const LoginScreen = props => {
  return (
    <LoginPage>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => { console.log(values) }}
      >
        {(props) => (

          <Login>
            <LoginCard elevation={5}>
              <LoginContent>
                <LoginTitle title='Login' />
                <InputContainer>
                  <TextInput
                    label='Email'
                    placeholder='Digite seu email'
                    value={props.values.email}
                    onChangeText={props.handleChange('email')}
                    left={<TextInput.Icon name='email-outline' />}
                  />
                  <TextInput
                    label='Senha'
                    value={props.values.senha}
                    onChangeText={props.handleChange('senha')}
                    placeholder='Digite sua senha'
                    left={<TextInput.Icon name='lock-outline' />}
                  />
                </InputContainer>
                <View style= {{ flexDirection: "row", marginBottom: 10}}>
                  <Checkbox style={{alignSelf: "center"}}/>
                  <Text style={{margin: 8}}>Salvar Senha?</Text>
                </View>
                <Button mode='contained' style={{backgroundColor: 'green'}}>Login</Button>
                <Text>Ou entrar com:</Text>
                <View style= {{ flexDirection: "row", marginBottom: 10}} >
                  <Button mode='outlined'>Facebook</Button>
                  <Button mode='outlined'>Google</Button>
                </View>
                <Text>Não é um mebro ainda? Faça um cadastro.</Text>
              </LoginContent>
            </LoginCard>
          </Login>

        )}
      </Formik>
    </LoginPage>
  );
}


export default LoginScreen;