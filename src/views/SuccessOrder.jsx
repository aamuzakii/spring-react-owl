import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { miniGreyFont, miniBoldFont, title, subTitle } from '../components/SharedStyle';
import { Button } from '@mui/material';

const cookie = new Cookies

function SuccessOrder() {
  const navigate = useNavigate();

  let isEligible = false
  if (cookie.get('prev_url') === 'post_order') isEligible = true
  useEffect(() => {
    if (!isEligible) navigate(-1)
  }, [])

  return (
    <div>
      {
        isEligible
        ? <SuccessOrderComponent/>
        : <></>
      }
    </div>
  )
}

export default SuccessOrder

function SuccessOrderComponent() {

  const navigate = useNavigate();

  const miniGreyFont2 = { ...miniGreyFont, textAlign: 'center' }
  const miniBoldFont2 = { ...miniBoldFont, color: '#1976d2', cursor: 'pointer' }

  const toHome = () => {
    navigate('/')
  }

  const toOrderDetail = () => {
    navigate(`/order/${orderNumber}`)
  }

  const orderNumber = cookie.get('recent_posted_order')

  return (
    <div style={{ padding: 25, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
      <CheckMark/>
      <p style={title} >Terima kasih sudah berbelanja!</p>
      <p style={miniGreyFont2} >Pesananmu sedang diproses. Lacak pesananmu untuk mengetahui sejauh mana pengirimannya diproses.</p>
      <div style={{ width: '100%', border: '1px solid rgb(217, 217, 217)', borderRadius: 8, display: 'flex', justifyContent: 'space-between', padding: 8 }} >
        <div>
          <p style={miniGreyFont} >Total Pembayaran</p>
          <p style={miniBoldFont} >Rp.100.000</p>
        </div>
        <div>
          <p style={miniGreyFont}  >Pesanan {orderNumber}</p>
          <p style={miniBoldFont2} >Lihat Detail</p>
        </div>
      </div>
      <Button onClick={toOrderDetail} sx={{ marginTop: 10 }} variant="contained" disableElevation >Lacak Pesanan</Button>
      <Button onClick={toHome} >Kembali ke katalog</Button>
    </div>
  )
}

function CheckMark() {
  return (
    <svg className="order-success__StyledOrderSuccess-sc-1fi891n-1 gAcWZI" width="126" height="125" viewBox="0 0 126 125" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="63" cy="62.5" r="62.5" fill="#E6F6E8"></circle><path fillRule="evenodd" clipRule="evenodd" d="M96.237 44.675c1.246 1.337 1.119 3.392-.285 4.589l-43.36 36.985c-1.393 1.188-3.522 1.087-4.774-.227l-15.205-15.96c-1.261-1.324-1.157-3.38.233-4.59 1.39-1.212 3.54-1.121 4.8.203l12.947 13.588 40.846-34.84c1.404-1.198 3.552-1.084 4.798.252z" fill="#00A81C" stroke="#E6F6E8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
  )
}