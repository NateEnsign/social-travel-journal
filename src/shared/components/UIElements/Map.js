import React from 'react';

import './Map.css';

const Map = (props) => {
  return (
    <div className={`map ${props.className}`} style={props.style}>
        <h4>Map would display here if I were to hook it up with the google maps API. I did not do this as I want to use it for other projects and it does require a card and cost money if you go over the free $200 a month allotment.</h4>
    </div>
  )
}

export default Map