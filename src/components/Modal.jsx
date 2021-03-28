import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <Background></Background>
      <ModalStyle>
        <button
          onClick={onClose}
          style={{
            position: 'fixed',
            top: '20px',
            right: '50px',
            fontSize: '1.8rem',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
          }}
        >
          &#10006;
        </button>
        {children}
      </ModalStyle>
    </>,
    document.getElementById('portal')
  );
}

const ModalStyle = styled.div`
  position: fixed;
  width: 80%;
  height: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  z-index: 1000;

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    button {
      margin: 0 auto;
      cursor: pointer;
      height: 80px;
      width: 30%;
      background-color: transparent;
      outline: none;
      border: 2px solid #747474;
      font-size: 1.2rem;
    }
    h1 {
      margin-bottom: 30px;
      color: #cccccc;
    }
    h2 {
      color: #444444;
    }
    .status {
      height: 50%;
      display: flex;
      align-items: center;
      label {
        padding: 5px;
      }
    }
    .gender {
      height: 50%;
      display: flex;
      align-items: center;
      label {
        padding: 5px;
      }
    }
  }
  //Tablets
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 50%;
    form {
      height: 100%;
      justify-content: space-around;
      button {
        height: 50px;
        width: 50%;
      }
      .status {
        height: 20%;
        font-size: 1.4rem;
        label {
          padding: 5px;
        }
      }
      .gender {
        height: 20%;
        font-size: 1.4rem;
      }
    }
  }

  //Mobile
  @media (min-width: 320px) and (max-width: 767px) {
    height: 70%;
    width: 100%;
    form {
      height: 100%;
      justify-content: space-around;
      button {
        height: 50px;
        width: 90%;
      }
      .status {
        font-size: 1rem;
        input,
        label {
          margin-left: -30px;
          padding: 0 35px;
        }
      }
      .gender {
        font-size: 1rem;
        input,
        label {
          margin-left: -40px;
          padding: 0 44px;
        }
      }
      h1,
      h2 {
        margin-left: -30px;
      }
    }
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export default Modal;
