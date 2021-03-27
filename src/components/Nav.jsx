import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Modal from './Modal';

function Nav({filter}) {
  const [isOpen, setIsOpen] = useState(false);
  const [statusRadion, setStatusRadio] = useState('');
  const [genderRadion, setGenderRadio] = useState('');

  const sortHandler = (e) => {
    e.preventDefault();
    filter(statusRadion, genderRadion);
    setIsOpen(false);
  }

  return (
    <NavStyle>
      <div className="links">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/create_character">Create a character</NavLink></li>
        </ul>
      </div>
      <div className="filter">
        <button onClick={() => setIsOpen(true)}>Sort</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <form>
            <h1>Filter By:</h1>
            <h2>Status</h2>
            <div className="status">
              <input type="radio" value="alive" name="status" id="alive" checked={statusRadion === 'alive'} onChange={(e) => setStatusRadio(e.target.value)}/>
              <label htmlFor="alive">alive</label>
              <input type="radio" value="dead" name="status" id="dead" checked={statusRadion === 'dead'} onChange={(e) => setStatusRadio(e.target.value)}/>
              <label htmlFor="dead">dead</label>
              <input type="radio" value="unknown" name="status" id="unknown" checked={statusRadion === 'unknown'} onChange={(e) => setStatusRadio(e.target.value)}/>
              <label htmlFor="unknown">unknown</label>
            </div>
            <h2>Gender</h2>
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
            <button type="submit" onClick={sortHandler}>Submit</button>
          </form>
        </Modal>
      </div>
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  border-bottom:1px solid silver;
  height: 10vh;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  .links{
    width: 25vw;
    margin-left: 3%;
    ul{
      display: flex;
      justify-content: space-around;
      list-style-type: none;
      li{
        a{
          font-size: 1.4rem;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          &:hover{
            color: #ff7627;
          }
        }
      }   
    }
  }
  .filter{
    width: 25vw;
    display: flex;
    justify-content: flex-start;
    button{
      width: 15vw;
      height: 30px;
      background-color:transparent;
      transition: all 0.2s ease;
      outline: none;
      border: 2px solid #ff7627;
      font-size: 1.2rem;
      font-weight: 500;
      border-radius: 20px;
      cursor: pointer;
      &:hover{
        background-color:#ff7627;
        color: white;
      }
    }
  }
`

export default Nav
