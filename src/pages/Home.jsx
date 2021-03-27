import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCharacters} from '../actions';
import Character from '../components/Character';
import styled from 'styled-components';

function Home({status, gender}) {
  const dispatch = useDispatch();
  const charactersFetch = useSelector(state => state.allCharacters);
  const { loading = true, characters} = charactersFetch;
  
  let [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    dispatch(getAllCharacters(currentPage, status, gender));
  }, [dispatch, currentPage, status, gender]);
 
 const generateNextCharacters = () => {
  setCurrentPage(++currentPage);
 }

 const generatePreviousCharacters = () => {
  if(currentPage - 1 < 1){
    setCurrentPage(1);
  }else{
    setCurrentPage(--currentPage);
  }
 }

 const buttonDisabled = () => {
   if(characters.length !== 0){
     return characters.info.next ? '' : 'disabled'
   }
 }
  
  return (
    <HomeStyle>
      <CharactersBlockStyle>
        {loading ? 'Loading...' : (
          characters.results.slice(0,12).map(el => {
            return <Character key={el.id} data={el} />
          })
        )}
      </CharactersBlockStyle>
      <PaginationButtonsStyle>
        <button onClick={generatePreviousCharacters}>Back</button>
        <button onClick={generateNextCharacters} disabled={buttonDisabled()}>Next</button>
      </PaginationButtonsStyle>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const PaginationButtonsStyle = styled.div`
  width: 96%;
  height: 100px;
  display: flex;
  justify-content: center;
  margin-top: -10px;
  button{
    width: 15%;
    height:50px;
    margin: 0 15px;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    border: 2px solid #ff7627;
    border-radius: 20px;
    color: #ff7627;
    font-size: 1.4rem;
    &:hover{
      background-color: #ff7627;
      color: white;
    }
  }
`

const CharactersBlockStyle = styled.div`
  width: 96%;
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-template-rows: repeat(6, 250px);
  justify-content: space-evenly;
  padding: 40px;
`

export default Home
