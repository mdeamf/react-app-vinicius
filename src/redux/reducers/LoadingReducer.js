import { LOADING } from '../actions/LoadingAction';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  let isLoading = state.isLoading;

  switch (action.type) {
    case LOADING:
      isLoading = action.isLoading;
      break;
  }

  return { ...state, isLoading };
};