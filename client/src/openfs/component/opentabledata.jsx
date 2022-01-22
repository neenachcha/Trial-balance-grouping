import React from 'react';

class OpenTableData extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      fsIDChosen: ''
    }
  }

  handleChooseFS (event) {

    console.log('clicked', event.target.innerText)
    this.setState({
      fsIDChosen: event.target.innerText
    }, () => {
      this.props.onChooseFS(this.state.fsIDChosen);
    })
  }

  render () {

    return (
      <tr>
        <td>{this.props.data.companyName}</td>
        <td>{this.props.data.year}</td>
        <td>{this.props.data.version}</td>
        <td onClick={this.handleChooseFS.bind(this)}>{this.props.data._id}</td>
      </tr>
    );
  }
}

export default OpenTableData;




