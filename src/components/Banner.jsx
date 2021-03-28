import React from 'react';
import styled from 'styled-components';
import banner from '../images/banner.png';

function Banner() {
  return (
    <BannerStyle>
      <h1>The Rick and Morty</h1>
    </BannerStyle>
  );
}

const BannerStyle = styled.div`
  border-bottom: 1px solid silver;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.5rem;
  padding-left: 20px;
  font-weight: 900;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: right center;

  //Tablet
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.5rem;
  }
  //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;

export default Banner;
