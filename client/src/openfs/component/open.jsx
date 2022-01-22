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

    axios.get('/openfsfromdatabase')
      .then((res) => {
        console.log('3 res from server', res.data);
        this.setState({
          fsFromDatabase: res.data
        })
      })
  }

  handleChooseFS (fsID) {

    var fss = this.state.fsFromDatabase;
    console.log('fss', fss);
    var fs = fss.filter((fsObj) => {
      if (fsObj._id === fsID) {
        return fsObj
      }
    })[0];
    console.log('fs', fs);
    this.props.onChooseFS(fs)
  }

  render () {
    return (
      <div className="centerDiv">
        <h3 className="textCenter"> Choose Financial statement to open by clicking ID </h3>
        <input
          className="button"
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




