import React, { useState, useEffect} from 'react'
import DisplayCommunication from './DisplayCommunication';
import MessagingBox from './MessagingBox';

export default function MessagingPanel({userName}) {

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({})
  const [connection, setConnection] = useState(null)
  
function onMessageHandler(message) {
    const data = JSON.parse(message.data)
    setMessage({...data, id: getRandomIntInclusive(1, 1000)})        
}

  useEffect(() => {
    const newConnection = new WebSocket('ws://localhost:9090/')
    newConnection.onmessage = onMessageHandler
    setConnection(newConnection)
  }, [])

  useEffect(() => {
    if (Object.keys(message).length) setMessages([...messages, message])        
  }, [message])

  const getMessage =  (message) => {
    const data = {userName, message}
    connection.send(JSON.stringify(data), messages);
  }

  return (
    <>
      <DisplayCommunication messages={messages} />
      <MessagingBox getMessage={getMessage} />
    </>
  )
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

