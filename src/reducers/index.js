import {combineReducers} from 'redux';
import {getAllCharactersReducer} from './getAllCharactersReducer';
import {getChosenCharacterReducer} from './getChosenCharacterReducer';
import {getEpisodesReducer} from './getEpisodesReducer';

export const rootReducer = combineReducers({
  allCharacters: getAllCharactersReducer,
  character: getChosenCharacterReducer,
  episodes: getEpisodesReducer
})