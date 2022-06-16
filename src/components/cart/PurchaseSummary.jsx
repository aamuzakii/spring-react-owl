import React from 'react'
import { useSelector } from 'react-redux'
import { subTitle, elevatedContainerLeft, miniGreyFont } from '../SharedStyle'



function PurchaseSummary() {
  let totalPriceInCart = useSelector( state => state.company.totalPriceInCart)
  return (
    <div style={ elevatedContainerLeft } >
      <p style={ subTitle } >Detail Pembayaran</p>
      <p style={ miniGreyFont } >Subtotal: Rp. {totalPriceInCart} </p>
    </div>
  )
}

export default PurchaseSummary