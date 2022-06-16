import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { elevatedContainerLeft, miniGreyFont, title } from '../SharedStyle';
import { useCountTotalPriceInsideCartArray } from '../../helpers/Function'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { postOrder } from '../../store/actions/company';
import { objToArr, SetCartLocalAndRedux } from '../../helpers/Function'
import Cookies from 'universal-cookie';

function CustomerInfo({setIsConfirmation, isConfirmation}) {

  const dispatch = useDispatch()

  const elevatedContainerLeft2 = { ...elevatedContainerLeft, position: "fixed", bottom: 0, height: 90, width: '100vw', backgroundColor: 'white', zIndex: 99, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', boxSizing: 'border-box' }

  let insideCart = useSelector( state => state.company.insideCart)

  let insideCartArray = objToArr(insideCart)
  
  let customerInfo = useSelector( state => state.company.customerInfo)

  let totalPriceInCart = useCountTotalPriceInsideCartArray(insideCartArray)

  const navigate = useNavigate();
  const cookies = new Cookies

  let orderInfo = {
    additional_info: 'testing bro',
    order_note: 'testing bro',
    delivery_note: 'testing bro',
    delivery_date: 'testing bro',
    delivery_cost: 'self_define',
    subtotal: 'testing bro',
    total: 'testing bro',
  }

  let order_aggregate = {
    information: orderInfo,
    items: insideCartArray,
    customer: customerInfo
  }


  const handleClick = async () => {
    if (isConfirmation) {
      await dispatch(postOrder(order_aggregate))
      if (cookies.get('token')) {
        cookies.set('prev_url', 'post_order', {path: '/', expires: new Date(Date.now()+5000)});
        navigate("/success-order")
        SetCartLocalAndRedux( {}, dispatch)
      } else {
        navigate("/login")
      }
    } else {
      setIsConfirmation(true)
    }
  }
  return (
    <footer style={elevatedContainerLeft2} >
      <div>
        <p style={{ ...miniGreyFont, marginBottom: 5}} >Total Pembayaran</p>
        <p style={{ fontWeight: 'bold', fontSize: 16, lineHeight: '150%', letterSpacing: 0.5, color: 'rgb(92, 183, 135)', margin: 0 }} >{totalPriceInCart}</p>
      </div>
      <div><Button onClick={handleClick}  variant="contained" disableElevation sx={{ width: '100%', height: 30 }} >Lanjut</Button></div>
    </footer>
  )
}

export default CustomerInfo