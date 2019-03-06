import React from 'react';


function LikeButton(props) {
  return <div>
    <button onClick={props.onClick}>like</button>
    <span>{props.count}</span>
  </div>
}
