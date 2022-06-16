import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTotalPriceInCart } from '../store/actions/company';
import { setInsideCart } from '../store/actions/company';
import Cookies from 'universal-cookie';

export const objToArr = (obj) => {
  let arr = []
  for (const key of Object.keys(obj)) {
    if (obj[key].qty > 0) arr.push(obj[key])
  }
  return arr
}

export const useCountTotalPriceInsideCartArray = (insideCartArray) => {
  let total = 0
  insideCartArray.forEach(item => {
    total += item.int_price * item.qty
  })
  let decorated_total = formatter.format(total)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTotalPriceInCart(decorated_total))
  }, [])
  
  return `Rp. ${decorated_total}`
}

const formatter = new Intl.NumberFormat('id-ID');

export const integerToRupiah = int => `Rp. ${formatter.format(int)}`

export const SetCartLocalAndRedux = (obj, dispatch) => {
  const cookies = new Cookies();
  cookies.set('cart', obj, { path: '/' });
  dispatch(setInsideCart(obj))
}

export const groupProductByCategory = productArray => {

  let result = {}
  productArray.map((item)=> {
    let foo = item.category.id
    if (!result[foo]) {
      result[foo] = []
    }
    result[foo].push(item)
  })
  return result
}