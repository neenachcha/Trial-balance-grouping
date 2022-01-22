import React from 'react';
import OpenTableData from './opentabledata.jsx';

class OpenTable extends React.Component {

  render () {

    var tableData = this.props.fsFromDatabase.map((data, index) => {
      return (<OpenTableData
        data={data}
        key={index}
        onChooseFS={this.props.onChooseFS}
      />)
    })

    return (
      <div>
        <table className="centerDiv">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Year</th>
              <th>Version</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </table>
      </div>
    )
  }
}

export default OpenTable;




