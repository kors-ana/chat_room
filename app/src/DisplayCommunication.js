import React from 'react'

export default function DisplayCommunication({messages}) {
  return (
    <div id="displayCommunication">
      {messages.map(message => {
        return (

            <div key={message.id}>{message.userName}:{message.message}</div>

        )
      })}
    </div>
  )
}
