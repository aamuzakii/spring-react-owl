import React from 'react'
import { subTitle, elevatedContainerLeft, miniGreyFont } from '../SharedStyle'



function Delivery() {
  return (
    <div style={ elevatedContainerLeft } >
      <p style={ subTitle } >Metode Pengiriman</p>
      <p style={ miniGreyFont } >Saat ini pengiriman hanya tersedia oleh kurir kami</p>
    </div>
  )
}

export default Delivery