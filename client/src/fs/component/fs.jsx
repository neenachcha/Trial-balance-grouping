import React from 'react';
import FSElement from  './fselement.jsx';

var FS = (props) => {
  var fsElementsObj = props.elements;
  var fsElementsArr = [];
  for (var name in fsElementsObj) {
    var value = fsElementsObj[name];
    var element = [name, value];
    fsElementsArr.push(element);
  }

  var allElement = fsElementsArr.map((element, i) => {
    return <FSElement description={element[0]} amount={element[1]} key={i} />
  });

  return (
    <div>
      <div>Financial statement</div>
      <table>
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