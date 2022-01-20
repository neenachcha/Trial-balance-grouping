import React from 'react';

class Open extends React.Component {
  handleClick () {
    // CONTINUE 
  }
  render () {
    return (
      <input
          type="submit"
          value="Open"
          name="Open Financial Statement"
          onClick={this.handleClick}
      />
    )
  }
}

export default Open;




