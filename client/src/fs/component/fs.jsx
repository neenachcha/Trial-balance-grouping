import React from 'react';
import FSElement from  './fselement.jsx';

var FS = (props) => {
  var fsElementsObj = props.elements;
  var fsElementsArr = [];

  for (var name in fsElementsObj) {

    if (name !== 'companyName' &&  name !== 'year' && name!== '_id' && name !== '__v' && name !== 'version') {
      var value = fsElementsObj[name];
      var element = [name, value];
      fsElementsArr.push(element);
    }

  }

  var allElement = fsElementsArr.map((element, i) => {
      return <FSElement description={element[0]} amount={element[1]} key={i} />
  })

  return (
    <div className="centerDiv">
      <h3 className="textCenter">Financial statement</h3>
      <div className="centerDiv">Company : {fsElementsObj.companyName}</div>
      <div className="centerDiv">Year : {fsElementsObj.year}</div>
      <table className="centerDiv">
        <thead>
          <tr>
            <th></th>
            <th>USD</th>
          </tr>
        </thead>
        <tbody>
          {allElement}
        </tbody>
      </table>
    </div>
  )
}

export default FS;