import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100vw;
  height: 100vh;

  background-color: beige;

  textarea {
    width: 260px;
    height: 110px;
    padding: 15px;

    resize: none;
  }
`;

export const ChatWrapper = styled.div`
  background-color: beige;  
`;

export const Chat = styled.p`
  width: 200px;
  margin: auto;
  padding: 10px;
  margin-top: 10px;
  
  text-align: left;

  background-color: white;
  border: 1px solid rosybrown;
`;

