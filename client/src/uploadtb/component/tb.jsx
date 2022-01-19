import React from 'react';
import TBElement from './tbElement.jsx';

class TB extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      'cash': [0, 'choose'],
      'account receivable': [0, 'choose'],
      'account payable': [0, 'choose'],
      'paid up capital': [0, 'choose'],
      'prior year equity': [0, 'choose'],
      'income from invesment': [0, 'choose'],
      'revenue from sales': [0, 'choose'],
      'cost of good sold': [0, 'choose'],
      'salary expense': [0, 'choose'],
      'other expense': [0, 'choose']
    }
  }

  updateTBElements (name, amount, group) {
    if (amount === null) {

      this.setState((prevState) => {

        var newArr = [...prevState[name]]

        console.log('newArr: ', newArr);
        newArr.pop();
        newArr.push(group);
        console.log('newArr: ', newArr);

        return {
          [name]: newArr
        }
      });

    } else if (group === null) {

      this.setState((prevState) => {

        var newArr = [...prevState[name]]
        newArr.shift();
        newArr.unshift(amount);

        return {
          [name]: newArr
        }
      });

    } else {

      this.setState((prevState) => {
        return {
          [name]: [amount, group]
        }
      });

    }
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }


  render() {
    var elements = ['cash', 'account receivable', 'account payable', 'paid up capital', 'prior year equity', 'income from invesment', 'revenue from sales', 'cost of good sold', 'salary expense', 'other expense'];

    var tbElement = elements.map((element, index) => {
      return <TBElement onSubmit={this.updateTBElements.bind(this)} description={element} key={index} />
    });

    return (
      <form action="/uploadtb" method="POST">
        <div>Trial Balance</div>
        <table>
          <thead>
            <tr>
              <th>Account description</th>
              <th>Amount</th>
              <th>Group</th>
            </tr>
          </thead>
          <tbody>
            {tbElement}
          </tbody>
        </table>
        <input
          type="submit"
          value="Submit"
          name="submit"
          onClick={this.handleSubmit.bind(this)}
        />
      </form>
    );
  }
};

export default TB;