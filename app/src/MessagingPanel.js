import React, {useState, useEffect} from 'react'
import DisplayCommunication from './DisplayCommunication';
import MessagingBox from './MessagingBox';

export default function MessagingPanel({userName}) {

  const [messages, setMessages] = useState([]);
  console.log("TCL: MessagingPanel -> messages", messages)

  const connection = new WebSocket('ws://localhost:9090/');

  

  const getMessage = (message) => {
    const data = {userName, message}
    connection.send(JSON.stringify(data));
  }
  useEffect(() => {
    connection.onmessage = message => {
      const data = JSON.parse(message.data)
      setMessages({messages: [...messages, data]});
    }
  }, [])

  return (
    <>
      <DisplayCommunication messages={messages} />
      <MessagingBox getMessage={getMessage} />
    </>
  )
}
