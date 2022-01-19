var React = require('react');
var ReactDOM = require('react-dom');
import TB from './uploadtb/component/tb.jsx';
import FS from './fs/component/fs.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      fsElements: {}
    }
  }

  sendData (elements) {

    axios.post('/uploadtb', elements)
      .then((res) => {
        this.setState({
          fsElements: res.data
        })
      });
  }

  render () {
    return (
      <div>
        <TB onSubmit={this.sendData.bind(this)}/>
        <FS elements={this.state.fsElements}/>
      </div>
    )
  }
};


ReactDOM.render(<App />, document.getElementById('app'));