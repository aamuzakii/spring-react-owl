import React from 'react'
import DetailCardReadOnly from './DetailCardReadOnly';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { objToArr } from '../../helpers/Function'

function ListProductReadOnly({ consumer }) {
  
  const companyState = useSelector( state => state.company)
  let productsArray = []

  if (consumer === 'order_detail_page') {
    const orderDetail = companyState.orderDetail
    productsArray= orderDetail.products
  } else {
    // for page cart
    const insideCart = companyState.insideCart
    productsArray = objToArr(insideCart)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 12, boxShadow: 'rgb(0 0 0 / 14%) 0px 1px 4px', boxSizing: 'border-box' }} >
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%'}} >
        <div style={{ display: 'flex', alignItems: 'center'}} >
          <div style={{ margin: 10, fontWeight: 'bold', color: 'rgb(71, 75, 107)' }} >Produk Pesanan</div>
        </div>
      </div>

      {/* BELOW ARE PRODUCTS */}
      
      {
        productsArray.map(({id, name, price, image_url, qty, int_price}, i)=> (
          <DetailCardReadOnly id={id} name={name} price={price} image_url={image_url} key={i} qty={qty} int_price={int_price} ></DetailCardReadOnly>
        ))
      }

    </div>

  )
}

export default ListProductReadOnly