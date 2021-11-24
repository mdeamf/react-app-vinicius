// Action Types
export const Types = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SUCCESS_LOGIN: 'SUCCESS_LOGIN',
  FAILURE_LOGIN: 'FAILURE_LOGIN',
  SEND_EMAIL: 'SEND_EMAIL',
};

// Reducer
const initialState = {
  isLoggedIn: false,
  isSendEmail: false,
  user: '',
  email: '',
  error: false,  
};

export default (state = initialState, action) => {
  let isLoggedIn = state.isLoggedIn;
  let isSendEmail = state.isSendEmail;
  let user = state.user;
  let email = state.email;
  let error = state.error;

  switch (action.type) {
    case Types.LOGIN:
      break;
    case Types.LOGOUT:
      isLoggedIn = false;    
    case Types.SEND_EMAIL:
      isSendEmail = action.isSendEmail;
      email = action.email
      break;
    case Types.SUCCESS_LOGIN:
      isLoggedIn = true;
      error = action.error;
      break;
    case Types.FAILURE_LOGIN:
      isLoggedIn = false;
      error = action.error;
      break;
  }

  return { ...state, isLoggedIn, user, isSendEmail, email, error };
};

