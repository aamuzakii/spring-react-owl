import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useCountTotalPriceInsideCartArray, objToArr } from '../../helpers/Function';
import { setTotalPriceInCart } from '../../store/actions/company';
import './ShoppingSnackbar.css';

function ShoppingSnackbar() {
  let navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/cart');
  }
  let insideCart = useSelector( state => state.company.insideCart)
  let insideCartArray = objToArr(insideCart)

  let totalPrice = useCountTotalPriceInsideCartArray(insideCartArray)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTotalPriceInCart(totalPrice))
  }, [totalPrice])
  


  return (
    <div className='container-shopping-snackbar' onClick={handleClick} >
      <div className='grouped' >
        <ShoppingCartIcon></ShoppingCartIcon>
        <div>{totalPrice}</div>
      </div>
      <div className='grouped'>
        <div>Checkout</div>
        <ArrowForwardIcon
          sx={{
            fontSize: 18,
          }}
        ></ArrowForwardIcon>
      </div>
    </div>
  )
}

export default ShoppingSnackbar