import { DO_LOGIN, SEND_EMAIL } from '../actions/LoginActions';

const initialState = {
  isLoggedIn: false,
  user: '',
  isSendEmail: false,
  email: '',
};

export default (state = initialState, action) => {
  let isLoggedIn = state.isLoggedIn;
  let isSendEmail = state.isSendEmail;
  let user = state.user;
  let email = state.email;

  switch (action.type) {
    case DO_LOGIN:
      isLoggedIn = action.isLoggedIn;
      user = action.user;
      break;
    case SEND_EMAIL:
      isSendEmail = action.isSendEmail;
      email = action.email
  }

  return { ...state, isLoggedIn, user, isSendEmail, email };
};