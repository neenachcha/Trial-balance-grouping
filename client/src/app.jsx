import React from 'react';
import ReactDOM from 'react-dom';
import TB from './uploadtb/component/tb.jsx';
import FS from './fs/component/fs.jsx';
import Open from './openfs/component/openbutton.jsx'
const axios = require('axios');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      fsElements: {}
    }
  }

  sendData (elements) {
    console.log('This is sent: ', elements);
    axios.post('/uploadtb', elements)
      .then((res) => {
        this.setState({
          fsElements: res.data
        })
      })
      .then(() => {
        console.log('App state: ', this.state.fsElements);
      });
  }

  render () {
    return (
      <div>
        <TB onSubmit={this.sendData.bind(this)}/>
        <FS elements={this.state.fsElements}/>
        <Open />
      </div>
    )
  }
};


ReactDOM.render(<App />, document.getElementById('app'));