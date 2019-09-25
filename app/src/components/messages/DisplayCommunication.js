import React from 'react';

import {
  ChatWrapper,
  Chat
} from './styles';

export default function DisplayCommunication({messages}) {

  return (
    <ChatWrapper>
      {messages.map(message => {
        return (
          <Chat key={message.id}>{message.userName}: {message.message}</Chat>
        )
      })}
    </ChatWrapper>
  )
}
