import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { objToArr, SetCartLocalAndRedux } from '../../helpers/Function';
import { setInsideCart } from '../../store/actions/company';
import DynamicButton from '../DynamicButton';
import { miniGreyFont, miniBoldFont } from '../SharedStyle';

function Detail({id, name, price, image_url, qty, int_price}) {
  const blueMiniFont = { margin: 10, color: 'rgb(8, 148, 235)', fontSize: 12, fontWeight: 'bold' }

  let insideCart = useSelector( state => state.company.insideCart)
  const dispatch = useDispatch()

  const childToParent = (qty) => {
    insideCart = { ...insideCart, [id]: {name, qty, image_url, id, price, int_price } }
    SetCartLocalAndRedux(insideCart, dispatch)
  }

  const clickTrashIcon = () => {
    const arr = objToArr(insideCart)
    const filtered = arr.filter(el => el.name !== name);
    const obj = arrToObj(filtered)
    SetCartLocalAndRedux(obj, dispatch)
  }

  const arrToObj = (array) => {
    let newObj = {}
    array.forEach(el => {
      newObj[el.id] = el
    });
    return newObj
  }

  return (
    <div style={{ width: '100%' }} >
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center'}} >
      <div style={{ width: '5rem', height: '5rem', display: 'flex' }} ><img src={image_url} alt="" style={{ maxWidth: '100%', objectFit: 'contain', borderRadius: '20%' }}  /></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 15, alignItems: 'center'}} >
        <div>
          <p style={ miniGreyFont } >{ name }</p>
          <p style={miniBoldFont} >{ price }</p>
        </div>
        <div style={{ width: 100 }} ><DynamicButton childToParent={childToParent} qtyFromRedux={qty}></DynamicButton></div>
        <div onClick={clickTrashIcon} style={{ cursor: 'pointer' }} ><svg data-testid="close-item" id="0-remove-item" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 7.467h1.333m0 0H18m-10.667 0V16.8a1.333 1.333 0 0 0 1.334 1.333h6.666a1.333 1.333 0 0 0 1.334-1.333V7.467H7.333zm2 0V6.133A1.333 1.333 0 0 1 10.667 4.8h2.666a1.333 1.333 0 0 1 1.334 1.333v1.334m-4 3.333v4m2.666-4v4" stroke="#7B8793" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
      </div>
    </div>
    <div style={blueMiniFont} >+ Tambah Catatan</div>
    </div>
  )
}

export default Detail