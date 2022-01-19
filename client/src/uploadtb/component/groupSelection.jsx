import React from 'react';

class GroupSelection extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      account: '',
      group: ''
    }
  }

  onSelect = (e) => {

    this.setState({
      account: e.target.id,
      group: e.target.value
    }, () => {
      this.props.onSubmit(this.state.account, null, this.state.group);
    })

  }

  render () {
    return (
      <select
        name={"group "+ this.props.account}
        id={this.props.account}
        onChange={this.onSelect.bind(this)}
      >
        <option name="choose" value="choose">-- choose --</option>
        <option name="asset" value="asset">asset</option>
        <option name="liability" value="liability">liability</option>
        <option name="equity" value="equity">equity</option>
        <option name="revenue" value="revenue">revenue</option>
        <option name="expense" value="expense">expense</option>
      </select>
    )
  }

}

export default GroupSelection;