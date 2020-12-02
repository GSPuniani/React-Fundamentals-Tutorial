// src/POPOSDetails.js

import React from 'react'

import data from '../../sfpopos-data.json'

function POPOSDetails(props) {
  const { id } = props.match.params // Location index
  const { images, title, desc, address, hours, features, geo, website } = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt="POPOS"/>
      </div>

      <div>
        <h1>{ title }</h1>
        <p>{ desc }</p>
        <p>{ address }</p>
        <p>{ hours }</p>
        <p>{ features }</p>
        <p>{ geo.lat } { geo.lon }</p>
        <p>{ website }</p>
      </div>

    </div>
  )
}

export default POPOSDetails