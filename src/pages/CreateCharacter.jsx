import React,{useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getAllCharacters} from '../actions';
import ShowMyCharacters from '../components/ShowMyCharacters'
import styled from 'styled-components';

function CreateCharacter() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setUrl] = useState('');
  const [genderRadion, setGenderRadio] = useState('female');
  const [charactersFromStorage, setCharactersFromStorage] = useState([]);

  const renderCharacters = (characters) => {
    setCharactersFromStorage(JSON.parse(characters));
  }
  
  useEffect(() => {
    dispatch(getAllCharacters());
    let charactersFromLocalStorage = localStorage.getItem('myCharacters');
    if(charactersFromLocalStorage !== null){
      renderCharacters(charactersFromLocalStorage);
    }
  }, [dispatch]);

  const createCharacter = () => {
    if(!name && !email && !url){
      return false;
    }

    dispatch(getAllCharacters());
    
    let myCharacters = [];
    if(localStorage.getItem('myCharacters')){
      myCharacters = localStorage.getItem('myCharacters')
      myCharacters = JSON.parse(myCharacters);
    }
    
    const character = {
      name,
      email,
      genderRadion,
      url
    }
    if(myCharacters.find(el => el.email === character.email)){
      return false;
    }else{
      myCharacters.push(character);
      localStorage.setItem('myCharacters', JSON.stringify(myCharacters));
    }
    setName('');
    setEmail('');
    setUrl('');
    window.location.reload();
  }

  return (
    <>
     <h1 style={{margin: '2% 0 2% 1%', color: '#5f5e5e', fontSize: '3.5rem'}}>
       Create your character:</h1>
    <WrapperStyle>
      <form>
        <div>
          <input type="text" placeholder="Name of your character" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
          <input type="email" placeholder="Email of your character" value={email}
          onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="gender">
              <input type="radio" value="female" name="gender" id="female" checked={genderRadion === 'female'} onChange={(e) => setGenderRadio(e.target.value)}/>
              <label htmlFor="female">female</label>
              <input type="radio" value="male" name="gender" id="male"  checked={genderRadion === 'male'} onChange={(e) => setGenderRadio(e.target.value)}/>
              <label htmlFor="male">male</label>
              <input type="radio" value="genderless" name="gender" id="genderless" checked={genderRadion === 'genderless'} onChange={(e) => setGenderRadio(e.target.value)}/>
              <label htmlFor="genderless">genderless</label>
              <input type="radio" value="unknown" name="gender" id="unknownD" checked={genderRadion === 'unknown'} onChange={(e) => setGenderRadio(e.target.value)}/>
              <label htmlFor="unknownD">unknown</label>
            </div>
            <div>
              <input type="url" placeholder="Image url of your character" value={url} onChange={(e) => setUrl(e.target.value)} required/>
            </div>
            <button type="submit" onClick={createCharacter}>Create</button>
      </form>
      <div className="characters">
        <ShowMyCharacters data={charactersFromStorage}/>
      </div>
    </WrapperStyle>
    </>
  )
}

const WrapperStyle = styled.div`
  display: flex;
  align-items: flex-start;
  form{
    width: 50%;
    margin: 0 auto;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    padding-left: 10px;
    button{
      width: 20%;
      height: 50px;
      margin-left: 33%;
      background-color: transparent;
      border: 2px solid #4d4d4d;
      font-size: 1.4rem;
      color: #4d4d4d;
      font-weight: medium;
      cursor: pointer;
      &:hover{
        background-color: #4d4d4d;
        color: white;
      }
    }
    label{
      font-weight: medium;
      color: #808080;
      font-size: 1.5rem;
    }

    input{
      width: 90%;
      height: 50px;
      outline: none;
      border: none;
      background-color: #f1f1f1;
      padding-left: 15px;
      font-size: 1.4rem;
      &::placeholder{
        color: #807e7e;
      }
      &:focus{
        outline: none;
        color: #7a7a7a;
      }
    }

    .gender input{
      width: auto;
      height: auto;
      margin: 0 10px;
    }
  }

  .characters{
      width: 50%;
  }
`
export default CreateCharacter
