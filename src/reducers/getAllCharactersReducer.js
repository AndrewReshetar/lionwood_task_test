export const getAllCharactersReducer = (state = { characters: [] }, action) => {
  switch (action.type) {
    case 'GET_ALL_CHARACTERS_REQUEST':
      return { loadi: true, characters: [] };
    case 'GET_ALL_CHARACTERS_SUCCESS':
      return { loading: false, characters: action.payload };
    case 'GET_ALL_CHARACTERS_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}