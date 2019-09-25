import styled from 'styled-components';

export const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100vw;
    height: 100vh;

    background-color: beige;
  }
`;
export const Label = styled.label`
  padding-bottom: 15px;

  font-size: 30px;
`;

export const Input = styled.input`
    width: 200px;
    padding: 10px;

    border-radius: 5px;
    border: none;
    border: 1px solid cadetblue;
`;

export const Button = styled.button`
  all: unset;

  margin-top: 10px;
  padding: 5px 40px;

  color: white;
  text-transform: uppercase;
  
  background: #25716a;
  border-radius: 4px;
  border: 1px solid beige;
`;