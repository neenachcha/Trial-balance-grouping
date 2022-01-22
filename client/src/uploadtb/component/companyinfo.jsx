import React from 'react';

class CompanyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      year: ''
    }
  }

  onChange (e) {
    var value = e.target.value;
    var key = e.target.id;

    this.setState({
      [key]: value
    }, () => {
      this.props.handleCompanyInfo(this.state.companyName, this.state.year)
    });

  }

  render () {
    return (
      <div className="centerDiv">
        <div>
          <label>
            Company name :
            <input type="text" id="companyName" name="companyName" onChange={this.onChange.bind(this)}/>
          </label>
        </div>
        <div>
          <label>
            Year :
            <input type="text" id="year" name="year" onChange={this.onChange.bind(this)} />
          </label>
        </div>
      </div>
    );
  }
}

export default CompanyInfo;