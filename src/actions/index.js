import axios from 'axios';

export const getAllCharacters = (id = 1, status, gender) => async (
  dispatch
) => {
  const createUrl = () => {
    if (status && gender) {
      return `https://rickandmortyapi.com/api/character?page=${id}&status=${status}&gender=${gender}`;
    } else if (status) {
      return `https://rickandmortyapi.com/api/character?page=${id}&status=${status}`;
    } else if (gender) {
      return `https://rickandmortyapi.com/api/character?page=${id}&gender=${gender}`;
    } else {
      return `https://rickandmortyapi.com/api/character?page=${id}`;
    }
  };

  try {
    dispatch({
      type: 'GET_ALL_CHARACTERS_REQUEST',
    });
    const { data } = await axios.get(createUrl());

    dispatch({
      type: 'GET_ALL_CHARACTERS_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ALL_CHARACTERS_FAIL',
      payload: error,
    });
  }
};

export const getChosenCharacter = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'GET_CHOSEN_CHARACTER_REQUEST',
    });

    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    dispatch({
      type: 'GET_CHOSEN_CHARACTER_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_CHOSEN_CHARACTER_FAIL',
      payload: error,
    });
  }
};

export const getEpisodes = (str) => async (dispatch) => {
  try {
    dispatch({
      type: 'GET_EPISODES_REQUEST',
    });

    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/episode/${str}`
    );

    dispatch({
      type: 'GET_EPISODES_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_EPISODES_FAIL',
      payload: error,
    });
  }
};
