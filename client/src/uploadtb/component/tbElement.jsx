import React from 'react';
import GroupSelection from './groupSelection.jsx';

class TBElement extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      amount: 0
    }
  }

  handleAmount (e) {
    console.log('this.state: ', this.state)
    this.setState({
      amount: e.target.value
    }, () => {
      console.log('this.state2: ', this.state)
      var name = this.props.description;
      var amount = this.state.amount;
      this.props.onSubmit(name, amount, null)
    })
  }


  render () {
    return (
      <tr>
        <td>{this.props.description}</td>
        <td><input
          type="text"
          id="amount"
          name={this.props.description}
          onChange={this.handleAmount.bind(this)}
        /></td>
        <td><GroupSelection
          onSubmit={this.props.onSubmit.bind(this)}
          account={this.props.description}
        /></td>
      </tr>
    )
  };
};


export default TBElement;