import React, {useState, useEffect} from 'react'
import DisplayCommunication from './DisplayCommunication';
import MessagingBox from './MessagingBox';

export default function MessagingPanel({userName}) {

  const [messages, setMessages] = useState([]);

  const connection = new WebSocket('ws://localhost:9090/');

  const getMessage =  (message) => {
    const data = {userName, message}
     connection.onopen = () => connection.send(JSON.stringify(data));
  }
  
  useEffect(() => {
    connection.onmessage = message => {
      const data = JSON.parse(message.data)
      setMessages([...messages, data])
    }
  }, [])

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

