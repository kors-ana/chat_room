import React, {useState} from 'react';

import Login from './Login';
import './App.css';
import MessagingPanel from './MessagingPanel';

function App() {
  const [userName, setUserName] = useState(null);

  const setUserNameHandler = (username) => {
    setUserName(username)
    console.log("TCL: setUserNameHandler -> username", username)
  }
  return (
    <div className="App">
      {!userName ? 
      <Login setUserName={setUserNameHandler} />
      : 
      <MessagingPanel userName={userName} />
      }
    </div>
  );
}

export default App;
