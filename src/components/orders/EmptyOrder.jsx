import React from 'react'
import {Button} from '@mui/material';
import { useNavigate } from "react-router-dom"


function EmptyOrder() {
  let navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/');
  }
  return (
    <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center'} } >
      <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="58" cy="45.433" rx="17.4" ry="18.367" stroke="#CBCFDC" strokeLinecap="round" strokeDasharray="0.5 2"></ellipse><path stroke="#CBCFDC" strokeLinecap="round" d="M58.499 8.233V16.9M71.051 20.423l4.82-6.047M79.425 29.014l5.283-2.393M31.067 26.677l5.334 2.28M40.827 14.376l4.818 6.048"></path><path d="M88.933 36.733H27.066v67.314a2.669 2.669 0 0 0 2.67 2.669h56.528a2.669 2.669 0 0 0 2.67-2.669V36.733z" fill="#E1E4ED"></path><path d="M43.13 47.777c1.273 0 2.304-1.086 2.304-2.424 0-1.339-1.031-2.424-2.304-2.424-1.272 0-2.303 1.085-2.303 2.424 0 1.338 1.031 2.424 2.303 2.424zM74.557 47.774c1.271 0 2.302-1.085 2.302-2.423s-1.031-2.422-2.302-2.422c-1.272 0-2.302 1.084-2.302 2.422s1.03 2.423 2.302 2.423z" fill="#CBCFDC"></path><path d="M61.522 70.628h-5.5c-7.834 0-14.206-7.411-14.206-16.519v-8.756c0-.722.554-1.308 1.242-1.308.687 0 1.245.586 1.245 1.308v8.756c0 7.663 5.255 13.902 11.719 13.902h5.5c6.46 0 11.718-6.239 11.718-13.902v-8.756c0-.722.556-1.308 1.244-1.308.687 0 1.243.586 1.243 1.308v8.756c0 9.108-6.37 16.52-14.205 16.52z" fill="#CBCFDC"></path><path d="M61.522 68.079H56.02c-7.797 0-14.14-6.674-14.14-14.875v-7.853c0-.684.528-1.24 1.177-1.24.653 0 1.178.558 1.178 1.24v7.853c0 6.834 5.285 12.397 11.785 12.397h5.5c6.499 0 11.784-5.563 11.784-12.397v-7.853c0-.684.528-1.24 1.178-1.24.65 0 1.177.558 1.177 1.24v7.853c0 8.201-6.345 14.875-14.138 14.875z" fill="#fff"></path></svg>
      <p style={{ fontSize: 18, fontWeight: 'bold' }} >kamu belum mulai berbelanja...</p>
      <p style={{ fontSize: 12, color: 'rgb(123, 135, 147)' }} >Buat pesanan pertama kamu, yuk!</p>
      <Button variant="contained" disableElevation sx={{ height: 30, margin: 3 }} onClick={handleClick} >Mulai Belanja</Button>
    </div>
  )
}

export default EmptyOrder