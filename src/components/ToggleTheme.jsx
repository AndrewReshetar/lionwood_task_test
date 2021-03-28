import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

function ToggleTheme({ chooseTheme }) {
  useEffect(() => {
    if (localStorage.getItem('userTheme') === 'dark') {
      isCheckedRef.current.checked = true;
    }
  });
  const [theme, setTheme] = useState('light');
  const isCheckedRef = useRef();
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    chooseTheme(theme);
  };
  return (
    <TogglerStyle>
      <label className="switch" onChange={themeToggler}>
        <input type="checkbox" ref={isCheckedRef} />
        <span className="slider round"></span>
      </label>
    </TogglerStyle>
  );
}

const TogglerStyle = styled.div`
  position: absolute;
  top: 18px;
  right: 30px;
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      &::before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 0;
        bottom: 0;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }
    }
    input:checked + .slider {
      background-color: #2196f3;
    }
    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }
    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
    .slider.round {
      border-radius: 34px;
    }
    .slider.round:before {
      border-radius: 50%;
    }
  }

  //Tablets
  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
  //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;

export default ToggleTheme;
