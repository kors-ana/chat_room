import React, {useState, useEffect} from 'react'
import DisplayCommunication from './DisplayCommunication';
import MessagingBox from './MessagingBox';

export default function MessagingPanel({userName}) {

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({})

  const connection = new WebSocket('ws://localhost:9090/');

  const getMessage = (message) => {
    console.log("TCL: getMessage -> message", message)
    const data = {userName, message}
    connection.send(JSON.stringify(data));
  }
  
  console.log("TCL: MessagingPanel -> messages", messages)
  useEffect(() => {
    connection.onmessage = message => {
      const data = JSON.parse(message.data)
      console.log("TCL: MessagingPanel -> data", data)

      setMessage({...data, id: getRandomIntInclusive(1, 1000)});
    }
  }, [connection.onmessage])

  useEffect(() => {
    if (Object.keys(message).length) setMessages([...messages, message])
  }, [message, messages])

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