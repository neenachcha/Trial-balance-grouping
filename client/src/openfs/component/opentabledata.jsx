import React from 'react';

class OpenTableData extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      
    }
  }

  render () {

    return (
      <tr>
        <td>{this.props.data.companyName}</td>
        <td>{this.props.data.year}</td>
        <td>{this.props.data.version}</td>
        <td>{this.props.data._id}</td>
      </tr>
    );
  }
}

export default OpenTableData;




