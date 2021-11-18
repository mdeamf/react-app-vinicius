import { DO_LOGIN } from '../actions/LoginActions';

const initialState = {
  isLoggedIn: false,
  login: '',
  senha: '',
  remember: false,
  email: ''
};

export default (state = initialState, action) => {
  let isLoggedIn = state.isLoggedIn;
  let login = state.login;

  switch (action.type) {
    case DO_LOGIN:
      isLoggedIn = true;
      login = action.login;
      break;
  }

  return { ...state, isLoggedIn, login };
};