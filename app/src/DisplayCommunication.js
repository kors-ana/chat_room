import React from 'react'

export default function DisplayCommunication({messages}) {
  return (
    <div id="displayCommunication">
      {messages.map(message => {
        return (
          <>
            <div>{message.userName}</div>
            <div>{message.message}</div>
          </>
        )
      })}
    </div>
  )
}
