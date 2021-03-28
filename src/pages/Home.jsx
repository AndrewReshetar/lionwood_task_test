import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters } from '../actions';
import styled from 'styled-components';
//Components
import Character from '../components/Character';

function Home({ status, gender }) {
  const dispatch = useDispatch();
  const charactersFetch = useSelector((state) => state.allCharacters);
  const { loading = true, characters } = charactersFetch;

  let [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    dispatch(getAllCharacters(currentPage, status, gender));
  }, [dispatch, currentPage, status, gender]);

  const generateNextCharacters = () => {
    setCurrentPage(++currentPage);
  };

  const generatePreviousCharacters = () => {
    if (currentPage - 1 < 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(--currentPage);
    }
  };

  const buttonDisabled = () => {
    if (characters.length !== 0) {
      return characters.info.next ? '' : 'disabled';
    }
  };

  return (
    <HomeStyle>
      <CharactersBlockStyle>
        {loading
          ? 'Loading...'
          : characters.results.slice(0, 12).map((el) => {
              return <Character key={el.id} data={el} />;
            })}
      </CharactersBlockStyle>
      <PaginationButtonsStyle>
        <button onClick={generatePreviousCharacters}>Back</button>
        <button onClick={generateNextCharacters} disabled={buttonDisabled()}>
          Next
        </button>
      </PaginationButtonsStyle>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PaginationButtonsStyle = styled.div`
  width: 96%;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-top: -10px;
  button {
    width: 15%;
    height: 50px;
    margin: 0 15px;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    border: 2px solid #ff7627;
    border-radius: 20px;
    color: #ff7627;
    font-size: 1.4rem;
    &:hover {
      background-color: #ff7627;
      color: white;
    }
  }

  //Tablets
  @media (min-width: 768px) and (max-width: 1024px) {
    button {
      width: 30%;
    }
  }
  //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    button {
      width: 40%;
    }
  }
`;

const CharactersBlockStyle = styled.div`
  width: 96%;
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-template-rows: repeat(6, 250px);
  justify-content: space-evenly;
  padding: 40px;

  //Tablets
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    grid-template-columns: repeat(2, 50%);
  }
  //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(12, 150px);
    padding: 30px;
  }
`;

export default Home;
