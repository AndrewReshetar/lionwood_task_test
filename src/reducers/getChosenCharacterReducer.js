export const getChosenCharacterReducer = (state = { character: [] }, action) => {
  switch (action.type) {
    case 'GET_CHOSEN_CHARACTER_REQUEST':
      return { loading: true, character: [] };
    case 'GET_CHOSEN_CHARACTER_SUCCESS':
      return { loading: false, character: action.payload };
    case 'GET_CHOSEN_CHARACTER_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}