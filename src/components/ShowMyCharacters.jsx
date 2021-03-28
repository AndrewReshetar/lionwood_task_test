import React from 'react';
import styled from 'styled-components';

function ShowMyCharacters({ data }) {
  if (data.length === 0) return null;
  return (
    <div>
      {data.map((el) => {
        return (
          <CharacterStyle key={el.email}>
            <CharacterImgStyle
              style={{ backgroundImage: `url(${el.url})` }}
            ></CharacterImgStyle>
            <CharacterInfoStyle>
              <h1>{el.name}</h1>
              <h1>{el.email}</h1>
              <h1>{el.genderRadion}</h1>
            </CharacterInfoStyle>
          </CharacterStyle>
        );
      })}
    </div>
  );
}

const CharacterStyle = styled.div`
  margin: 10px;
  border-radius: 20px;
  border: 1px solid silver;
  display: flex;
  border-radius: 20px;
`;

const CharacterImgStyle = styled.div`
  width: 30%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  border-radius: 20px;
`;

const CharacterInfoStyle = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  h1 {
    font-size: 1.4rem;
  }
  p {
    opacity: 0.8;
    padding-top: 5px;
    color: #9e9e9e;
  }
`;

export default ShowMyCharacters;
