import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEpisodes } from '../actions';
import styled from 'styled-components';

function Episodes({ data }) {
  const dispatch = useDispatch();
  const episodesFromStorage = useSelector((state) => state.episodes);
  const { loadingEpisodes, episodes } = episodesFromStorage;

  useEffect(() => {
    const getEpisodesFromUrl = () => {
      const episodes = data.map((el) => {
        return el.split('/')[5];
      });
      return episodes.join(',');
    };
    dispatch(getEpisodes(getEpisodesFromUrl()));
  }, [dispatch, data]);

  return (
    <EpisodesStyle>
      {loadingEpisodes ? (
        'Loading...'
      ) : Array.isArray(episodes) ? (
        episodes.map((el) => {
          return (
            <ul key={el.episode}>
              <li>{el.episode}</li>
            </ul>
          );
        })
      ) : (
        <ul key={episodes.episode}>
          <li>{episodes.episode}</li>
        </ul>
      )}
    </EpisodesStyle>
  );
}
const EpisodesStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding-top: 20px;
  ul {
    font-size: 1rem;
  }
`;

export default Episodes;
