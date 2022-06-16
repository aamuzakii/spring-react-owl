import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Address from '../components/cart/Address'
import Bumper from '../components/cart/Bumper'
import CustomerInfo from '../components/cart/CustomerInfo'
import Delivery from '../components/cart/Delivery'
import Flow from '../components/cart/Flow'
import ListProducts from '../components/cart/Products'
import ListProductReadOnly from '../components/cart/ListProductReadOnly'
import PurchaseSummary from '../components/cart/PurchaseSummary'
import Total from '../components/cart/Total'
import SimpleHeader from '../components/SimpleHeader'



function Cart() {
  let navigate = useNavigate();

  const [isConfirmation, setIsConfirmation] = useState(false)

  return (
    <div style={{ width: '100%' }}>
      { 
        (!isConfirmation)
        ? <>
            <SimpleHeader></SimpleHeader>
            <Flow></Flow>
            <ListProducts></ListProducts>
            <CustomerInfo></CustomerInfo>
            <Address></Address>
            <Delivery></Delivery>
            <Total setIsConfirmation={setIsConfirmation} ></Total>
            <Bumper></Bumper>
          </>
        : <ConfirmationPart isConfirmation={isConfirmation} ></ConfirmationPart>
      }

    </div >
  )
}

export default Cart

function ConfirmationPart({isConfirmation}) {
  return (
  <>
    <SimpleHeader></SimpleHeader>
    <Flow></Flow>
    <ListProductReadOnly></ListProductReadOnly>
    <Delivery></Delivery>
    <PurchaseSummary></PurchaseSummary>
    <Total isConfirmation={isConfirmation} ></Total>
    <Bumper></Bumper>
  </>
  )
}