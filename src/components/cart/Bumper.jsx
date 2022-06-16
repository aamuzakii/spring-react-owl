import React from 'react'
// import { elevatedContainerLeft } from '../SharedStyle'
// please choose one of these elevatedContainerLeft, consider the bumper styling!

const elevatedContainerLeft = { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 12 }

function Delivery() {
  return (
    <div style={elevatedContainerLeft} >
      <div style={{ height : 90 }} ></div>
    </div>
  )
}

export default Delivery