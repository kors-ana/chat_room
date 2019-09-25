import React, { useState } from 'react';

import Login from './components/login/Login';
import MessagingPanel from './components/messages/MessagingPanel';

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
