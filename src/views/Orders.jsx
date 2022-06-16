import React, { useEffect } from 'react'
import ChipsRow from '../components/orders/ChipsRow'
import EmptyOrder from '../components/orders/EmptyOrder'
import NavbarOrder from '../components/orders/Appbar'
import Card from '../components/orders/Card'
import {fetchOrderByStatus} from '../store/actions/company'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import Cookies from 'universal-cookie';
import CircularProgress from '@mui/material/CircularProgress';

function Orders() {

  let navigate = useNavigate();

  useEffect(() => {
    const cookies = new Cookies();
    let token = cookies.get('token')
    if (!token){
        return navigate("/login");
    }
  },[]);

  const dispatch = useDispatch()
  let orders = useSelector( state => state.company.orderByType)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('type') || 'all'
    dispatch(fetchOrderByStatus(status))
  }, [])
  

  return (
    <>
      <NavbarOrder></NavbarOrder>
      <div style={{ margin: 15}} >
        <div style={{fontSize: '12px'}} >Semua pesananmu di Persada shop dapat dilihat di sini.</div>
        <div style={{ fontWeight: 'bold', color: 'rgb(102, 102, 102)' }} >Pesanan Saya</div>
      </div>
        <ChipsRow></ChipsRow>
        <BottomPart orders={orders} ></BottomPart>
    </>
  )
}

function BottomPart({orders}) {
  const cookies = new Cookies();
  if (orders == null) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }} >
        <CircularProgress></CircularProgress>
      </div>
    )
  } else if (orders.length === 0) {
    return <EmptyOrder></EmptyOrder>
  } else if (orders.length > 0) {
    return (
      <>
        {
          orders.map((order, i) => (
            <Card key={i} order={order} ></Card>
          )) 
        }
      </>
    )
  } else if (orders.message === "no login user") {
    // cookies.remove('token', { path: '/' });
    return (
      <>{orders.message}</>
    )
  }
}

export default Orders 