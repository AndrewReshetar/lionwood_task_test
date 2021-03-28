import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function Character({ data }) {
  let history = useHistory();
  const showChosenCharacter = () => {
    history.push(`/character/${data.id}`);
  };

  return (
    <CharacterStyle onClick={showChosenCharacter}>
      <CharacterImgStyle
        style={{ backgroundImage: `url(${data.image})` }}
      ></CharacterImgStyle>
      <CharacterInfoStyle>
        <h1>{data.name}</h1>
        <p>
          {data.status} - {data.species}
        </p>
      </CharacterInfoStyle>
    </CharacterStyle>
  );
}

const CharacterStyle = styled.div`
  cursor: pointer;
  margin: 10px;
  border-radius: 20px;
  border: 1px solid silver;
  display: flex;
  border-radius: 20px;
  &:hover {
    border: 1px solid orange;
    opacity: 0.9;
    h1 {
      color: orange;
    }
  }
`;

const CharacterImgStyle = styled.div`
  width: 30%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  border-radius: 20px;
  //Tablets
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 40%;
  }
  //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    width: 50%;
  }
`;

const CharacterInfoStyle = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  h1 {
    font-size: 1.4rem;
  }
  p {
    opacity: 0.8;
    padding-top: 5px;
    color: #9e9e9e;
  }
  //Tablets
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 60%;
  }
  //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    width: 50%;
  }
`;

export default Character;
