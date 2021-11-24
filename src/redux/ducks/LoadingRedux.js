
// Action Types
export const Types = {
  LOADING: 'LOADING',
};

// Reducer
const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  let isLoading = state.isLoading;

  switch (action.type) {
    case Types.LOADING:
      isLoading = action.isLoading;
      break;
  }

  return { ...state, isLoading };
};