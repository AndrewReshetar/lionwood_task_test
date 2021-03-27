export const getEpisodesReducer = (state = { episodes: [] }, action) => {
  switch (action.type) {
    case 'GET_EPISODES_REQUEST':
      return { loadingEpisodes: true, episodes: [] };
    case 'GET_EPISODES_SUCCESS':
      return { loadingEpisodes: false, episodes: action.payload };
    case 'GET_EPISODES_FAIL':
      return { loadingEpisodes: false, error: action.payload };
    default:
      return state;
  }
}