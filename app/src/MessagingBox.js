import React from 'react'

export default function MessagingBox({getMessage}) {

  const messageHandler = e => {
    if(e.keyCode === 13) {
      e.preventDefault();
      getMessage(e.target.value);
      e.target.value = '';
    }
  }

  return (
    <div id="messagingBox">
      <textarea onKeyDown={messageHandler} ></textarea>
    </div>
  )
}
