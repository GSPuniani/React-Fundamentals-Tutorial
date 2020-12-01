// src/POPOSList.js

import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json'

function POPOSList() {

    const spaces = data.map((obj) => {
        // Deconstruct obj into properties
        const { title, address, hours, images } = obj
        return (
        <POPOSSpace
            key={title} // We use the title as they key because it is unique to each space
            name={title}
            address={address}
            hours={hours}
            image={images[0]}
        />
        )
    })

    return (
        <div className="POPOSList">
        { spaces }
        </div>
    )
}
  
export default POPOSList