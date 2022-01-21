import React from 'react';
import OpenTable from './opentable.jsx';
import axios from 'axios';

class Open extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      fsFromDatabase: [],
    }
  }

  handleClickOpen () {
    // Send get request to server at url openfsfromdatabase
    axios.get('/openfsfromdatabase')
      // response from server include all fs in database
      .then((res) => {
        console.log('3 res from server', res.data);
        // setState to equal to this array of fs
        this.setState({
          fsFromDatabase: res.data
        })
      })
  }

  handleChooseFS (fsID) {
    // get the whole fs object from fsID and
    var fss = this.state.fsFromDatabase;
    console.log('fss', fss);
    var fs = fss.filter((fsObj) => {
      if (fsObj._id === fsID) {
        return fsObj
      }
    })[0];
    console.log('fs', fs);
    // call this.props.onChooseFS with fs object
    this.props.onChooseFS(fs)
  }

  render () {
    return (
      <div>
        <input
            type="submit"
            value="Open"
            name="Open Financial Statement"
            onClick={this.handleClickOpen.bind(this)}
        />
        <OpenTable
          onChooseFS={this.handleChooseFS.bind(this)}
          fsFromDatabase={this.state.fsFromDatabase}
        />
      </div>
    )
  }
}

export default Open;




