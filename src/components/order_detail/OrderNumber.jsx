import React from 'react'
import { miniGreyFont, miniBoldFont, title, subTitle } from '../SharedStyle';
import { useParams } from "react-router-dom"

function OrderNumber() {
  let { id } = useParams()
  const miniGreyFont2 = { ...miniGreyFont, marginTop: 3, marginBottom: 3 }
  const miniBoldFont2 = { ...miniBoldFont, color: '#1976d2', cursor: 'pointer' }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 8 }} >
      <div>
        <p style={miniBoldFont} >Persada Store</p>
        <p style={miniGreyFont2} >No. Pesanan {id}</p>
        <p style={miniGreyFont2} >5 Juni 2020</p>
      </div>
      <div>
        <p style={miniGreyFont}  >Belum Lunas</p>
      </div>
    </div>
  )
}

export default OrderNumber