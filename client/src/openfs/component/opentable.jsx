import React from 'react';
import OpenTableData from './opentabledata.jsx';

class OpenTable extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      fsIDChosen: ''
    }
  }

  handleChooseFS (event) {
    // update state to clicked element
    console.log('clicked', event.target.innerText)
    this.setState({
      fsIDChosen: event.target.innerText
    }, () => {
      // call this.props.onChooseFS(this.state.fsChosen)
      this.props.onChooseFS(this.state.fsIDChosen);
    })
  }

  render () {
    // iterate over this.props.fsFromDatabase and map each data into array of openTableData with tag <OpenTableData data={data} onClick={this.handleChooseFS.bind(this)}/>
    var tableData = this.props.fsFromDatabase.map((data, index) => {
      return (<OpenTableData
        data={data}
        key={index}
        onChooseFS={this.props.onChooseFS}
      />)
    })

    return (
      <div>
        <div> Choose Financial statement to open </div>
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Year</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody onClick={this.handleChooseFS.bind(this)}>
            {tableData}
          </tbody>
        </table>
      </div>
    )
  }
}

export default OpenTable;




