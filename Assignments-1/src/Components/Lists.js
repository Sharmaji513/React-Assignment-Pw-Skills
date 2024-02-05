import React from 'react'

const Lists = (props) => {
    const listItems = props.items.map((item) =>
    <li key={item}>{item}</li>
  );
  
  return <ul>{listItems}</ul>;
}



export default Lists