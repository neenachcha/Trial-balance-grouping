import React from 'react';

var FSElement = (props) => {
  console.log('props.description', props.description)
  return (
   <tr>
     <td>{props.description}</td>
     <td>{props.amount}</td>
   </tr>
  )
}

export default FSElement;