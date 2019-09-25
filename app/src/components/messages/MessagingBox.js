import React from 'react';

import {
  Wrapper
} from './styles';

export default function MessagingBox({getMessage}) {

  const messageHandler = e => {
    if(e.keyCode === 13) {
      e.preventDefault();
      getMessage(e.target.value);
      e.target.value = '';
    }
  }

  return (
    <Wrapper>
      <textarea onKeyDown={messageHandler} placeholder="enter your message..."></textarea>
    </Wrapper>
  )
}
