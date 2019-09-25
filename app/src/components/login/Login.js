import React from 'react';

import {
  Wrapper,
  Label,
  Input,
  Button
} from './styles'

export default function Login({setUserName}) {

  const login = (e) => {
    e.preventDefault();
    setUserName(e.target.username.value);
  }

  return (
    <Wrapper>
      <form onSubmit={login}>
        <Label>Username:</Label> 
        <Input type="text" id="username" />
        <Button type="submit" >Log in!</Button>
      </form>
    </Wrapper>
  )
}
