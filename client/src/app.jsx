var React = require('react');
var ReactDOM = require('react-dom');
import TB from './component/tb.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <div>Trial Balance</div>
        <TB />
      </div>
    )
  }
};


ReactDOM.render(<App />, document.getElementById('app'));