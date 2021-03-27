import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';


function Header({filterHeader}) {
  const filter = (status,gender) => {
    filterHeader(status,gender);
  }
  return (
    <HeaderStyle>
      <Nav filter={filter}/>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  height: 10vh;
`

export default Header
