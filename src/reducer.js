// Data layer initialize its values
export const initialState = {
  user: {
    photoUrl: 'https://randomuser.me/api/portraits/lego/1.jpg',
    displayName: 'Test user',
  },
};

export const actionTypes = {
  SET_USER: 'SET_USER',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
