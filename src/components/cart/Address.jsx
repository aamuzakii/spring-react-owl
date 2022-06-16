import React from 'react'
import { title, elevatedContainerLeft } from '../SharedStyle'
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from "react-router-dom"

function Address() {
  const title2 = { ...title, margin: 0, padding: 5 }
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/address');
  }

  return (
    <div style={elevatedContainerLeft} >
      <p style={title2} >Alamat</p>
      <Button onClick={handleClick} variant="outlined"  style={{ margin: 'auto', marginTop: 20, marginBottom: 20, boxSizing: 'border-box' }} startIcon={<AddCircleOutlineIcon />}>
        Tambah Alamat Pengiriman
      </Button>
    </div>
  )
}

export default Address