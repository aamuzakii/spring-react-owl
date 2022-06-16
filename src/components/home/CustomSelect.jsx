import React from 'react'
import './CustomSelect.css'

function CustomSelect(props) {

  return (
    <>
      <select className='select-category' onClick={props.clickHandler} >
        <option value="" selected disabled hidden>Kategori</option>
      </select>
    </>
  )
}

export default CustomSelect