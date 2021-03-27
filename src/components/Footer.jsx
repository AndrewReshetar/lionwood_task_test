import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

function Footer() {
  const infoAllCharacters = useSelector(state => state.allCharacters);
  const {loading = true, characters} = infoAllCharacters;

  return (
    <FooterStyle>
      <div className="info"><h4>All Characters: {loading ? 'Loading...' : characters.info.count}</h4></div>
      <div><h5>&copy;Created by Andrew Reshetar, 2021</h5></div>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  border-top: 1px solid silver;
  height: 100px;
  display:flex;
  align-items: center;
  justify-content:space-evenly;
  flex-direction: column;
`

export default Footer
