import React, { Component } from 'react';

import DisplayCommunication from './DisplayCommunication';
import MessagingBox from './MessagingBox';

class Panel extends Component {
  state = {
    messages: [],
    connection: null,
  }
  
  componentDidMount() {
    const connection = new WebSocket('ws://localhost:9090/')

    connection.onmessage = message => {  
      const data = JSON.parse(message.data)
      this.setState({messages: [...this.state.messages, data]})
  };

  this.setState({ ...this.state, connection })
  }

  getMessage = (message) => {
    const data = {userName: this.props.userName, message}
    this.state.connection.send(JSON.stringify(data));
  };

  render() {

    return (
      <>
        <DisplayCommunication messages={this.state.messages} />
        <MessagingBox getMessage={this.getMessage} />
      </>
    )
  }
}

export default Panel;