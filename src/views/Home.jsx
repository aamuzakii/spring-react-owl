import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/home/AdvNavbar'
import Container from '../components/home/Container'
import ShoppingSnackbar from '../components/home/ShoppingSnackbar'
import SwipeableBottomDrawer from '../components/home/SwipeableBottomDrawer'
import { setIsCartFilled } from '../store/actions/company'
import { useNavigate } from "react-router-dom"

function Home() {
  const dispatch = useDispatch()
  const isCartFilled = useSelector( state => state.company.isCartFilled)
  let insideCart = useSelector( state => state.company.insideCart)

  const totalItemInCart = Object.keys(insideCart).reduce(function (previous, key) {
    return previous + insideCart[key].qty;
  }, 0);

  useEffect(() => {
    dispatch(setIsCartFilled(totalItemInCart))
  }, [insideCart])
  
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 600px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 600px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  let isShowSideDrawer = !matches

  const imageStyle = { 
    // height: 300,
    height: 'fit-content',
    width: '100%',
   }

  const imageUrl = 'https://media.istockphoto.com/photos/supermarket-aisle-blurred-background-with-laptop-computer-and-cart-on-picture-id963747918?k=20&m=963747918&s=612x612&w=0&h=uQA155YzW--kdQT5Qg-darvrSy4cuOPC6lOFoFkvrxg='

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/address');
  }

  return (
    <div>
      <Navbar isShowSideDrawer={isShowSideDrawer} />
      <div style={{ width: '100%', height: 233, display: 'flex', justifyContent: 'center', overflow: 'hidden', marginBottom: 15 }} >
        <img style={imageStyle}  src={imageUrl} alt=""  />
      </div>
      <SwipeableBottomDrawer/>
      <Container/>
      <WhatsApp/>
      { 
        isCartFilled ? <footer style={{color: "gray", position: "fixed", bottom: 0}}><ShoppingSnackbar/></footer> : <></>
      }
      
    </div>
  )
}

export default Home

function WhatsApp() {
  return (
    <a href="https://wa.me/+6881023786614">
    <div className='whatsapp-logo' style={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', width: 45, height: 45, backgroundColor: 'rgb(49, 223, 87)', position: "fixed", bottom: 80, right: 15,borderRadius: 50, boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px' }} >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 4a8 8 0 0 0-7.169 11.555 1 1 0 1 1-1.791.89A9.963 9.963 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.963 9.963 0 0 1-4.445-1.04 1 1 0 0 1 .89-1.791A8 8 0 1 0 12 4z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M4.263 15.035a1 1 0 0 1 .702 1.228l-1.04 3.812 3.812-1.04a1 1 0 0 1 .526 1.93l-5.5 1.5a1 1 0 0 1-1.228-1.228l1.5-5.5a1 1 0 0 1 1.228-.702z" fill="white"></path><path d="M14.862 12.846c.227.083 1.444.682 1.692.806s.413.186.475.29c.062.103.062.598-.145 1.177-.206.578-1.195 1.106-1.671 1.177-.427.064-.967.09-1.56-.098-.36-.114-.82-.266-1.412-.522-2.484-1.072-4.106-3.573-4.23-3.739l-.002-.003C7.877 11.76 7 10.588 7 9.376c0-1.22.64-1.818.867-2.066a.91.91 0 0 1 .66-.31c.165 0 .33.001.475.009.152.007.356-.058.557.425.206.496.701 1.715.763 1.838.062.124.104.269.02.434-.082.165-.35.514-.618.847-.11.137-.253.258-.109.506.145.248.642 1.058 1.378 1.715.946.844 1.744 1.105 1.991 1.23.248.123.392.102.537-.063.144-.165.619-.723.784-.97.165-.248.33-.207.557-.125z" fill="white"></path></svg>
    </div>
    </a>
  )
}