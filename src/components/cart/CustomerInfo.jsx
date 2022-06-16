import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { title, elevatedContainerLeft } from '../SharedStyle'
import { useDispatch } from 'react-redux';
import { setCustomerInfo } from '../../store/actions/company';


function CustomerInfo() {
  
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCustomerInfo({ name, phone }))
  }, [])
  

  const input = {
    margin: 10,
    width: '90%',
    heigh: '20rem'
  }

  const title2 = { ...title, margin: 0, padding: 5 }

  return (
    <div style={elevatedContainerLeft} >
      <p style={title2} >Info Pelanggan</p>
      <TextField value={name} onInput={e => setName(e.target.value)} id="outlined-basic" label="Nama" variant="outlined" style={input} size="small" />

      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">+62</InputAdornment>,
        }}
        id="outlined-basic"
        label="Nomor HP"
        variant="outlined"
        style={input}
        size="small"
        value={phone}
        onInput={e => setPhone(e.target.value)}
      />
    </div>
  )
}

export default CustomerInfo