import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getChosenCharacter} from '../actions';
import Episodes from '../components/Episodes';
import styled from 'styled-components';

function CharacterInfo({match}) {
  const dispatch = useDispatch();
  const characterFetch = useSelector(state => state.character);
  const { loading = true, character} = characterFetch;
  
  
  useEffect(() => {
   dispatch(getChosenCharacter(match.params.id))
  }, [dispatch, match]);


  return (
    <CharacterInfoStyle>
      {loading ? 'Loading...' : (
        <UserInfoStyle>
          <ImgStyle>
            <img src={character.image} alt=""/>
          </ImgStyle>
          <InfoStyle>
            <h1>Name: <span style={{opacity: '.6', fontSize: '1.2rem'}}>{character.name}</span></h1>
            <h1>Status: <span style={{opacity: '.6', fontSize: '1.2rem'}}>{character.status}</span></h1>
            <h1>Species: <span style={{opacity: '.6', fontSize: '1.2rem'}}>{character.species}</span></h1>
            <h1>Episodes:<Episodes key={character.episode.id} data={character.episode}/></h1>
          </InfoStyle>
        </UserInfoStyle>
      )}
    </CharacterInfoStyle>
  )
}

const CharacterInfoStyle = styled.div`
  min-height:600px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const UserInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 5% 0;
`
const ImgStyle = styled.div`
  width: 45%;
  img{
    margin-left:20px;
  }
`
const InfoStyle = styled.div`
  height: 50%;
  padding:10px;
  h1{
    font-size: 1.4rem;
    padding: 10px;
  }
`

export default CharacterInfo
