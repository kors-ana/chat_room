import React, { Component } from 'react';

import DisplayCommunication from './DisplayCommunication';
import MessagingBox from './MessagingBox';

class Panel extends Component {
  state = {
    messages: [],
  }
  
  connection = new WebSocket('ws://localhost:9090/');

  componentDidMount() {
    this.connection.onmessage = message => {
      
      const data = JSON.parse(message.data)
      this.setState({messages: [...this.state.messages, data]})

    }
  }

  getMessage = (message) => {
    const data = {userName: this.props.userName, message}
    this.connection.send(JSON.stringify(data));
  }

  render() {
  console.log("TCL: Panel -> messages", this.state.messages)

    return (
      <>
        <DisplayCommunication messages={this.state.messages} />
        <MessagingBox getMessage={this.getMessage} />
      </>
    )
  }
}

export default Panel;