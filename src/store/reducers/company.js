import { ADD_FAVOURITE, SET_RECOMMENDATIONS, SET_SEARCH_RESULT, SET_IS_LOADING, SET_CURRENT_COMPANY, SET_IS_CART_FILLED, SET_INSIDE_CART, SET_PRODUCT_TO_SHOW, SET_PRODUCT_BY_CATEGORY, SET_TOTAL_PRICE_IN_CART, SET_CUSTOMER_INFO, SET_ORDER_BY_TYPE, SET_COOKIE, SET_LIST_CATEGORY, SET_COMPLETE_PRODUCT, SET_CART_STEP, ORDER_DETAIL } from '../actionTypes'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const initialState = {
  favourites : [],
  recommendations: [],
  searchResult : [],
  isLoading: false,

  insideCart: cookies.get('cart') || {},
  totalPriceInCart: 0,
  isCartFilled: 0,
  cartStep: '',

  productToShow: [],
  completeProduct: [],
  productByCategory: {},
  listCategory: [],

  customerInfo: {},
  orderByType: null,
  orderDetail: { products: []},
  cookie: ''
}

function companyReducer (state = initialState, action) {
    const { type, payload } = action
    
    switch (type) {
      case ADD_FAVOURITE:
        return { ...state, favourites : [...state.favourites, payload] }
      case SET_RECOMMENDATIONS:
        return { ...state, recommendations : payload }
      case SET_SEARCH_RESULT:
        return { ...state, searchResult : payload }
      case SET_IS_LOADING:
        return { ...state, isLoading : payload }
        // CART
      case SET_IS_CART_FILLED:
        return { ...state, isCartFilled : payload }
      case SET_INSIDE_CART:
        return { ...state, insideCart : payload }
      case SET_TOTAL_PRICE_IN_CART:
        return { ...state, totalPriceInCart : payload }

      case SET_PRODUCT_BY_CATEGORY:
        return { ...state, productByCategory : payload }
      case SET_LIST_CATEGORY:
        return { ...state, listCategory : payload }
      case SET_PRODUCT_TO_SHOW:
        return { ...state, productToShow : payload }
      case SET_COMPLETE_PRODUCT:
        return { ...state, completeProduct : payload }
      case SET_CUSTOMER_INFO:
        return { ...state, customerInfo : payload }
      case SET_ORDER_BY_TYPE:
        return { ...state, orderByType : payload }
      case ORDER_DETAIL:
        return { ...state, orderDetail : payload }
      case SET_COOKIE:
        return { ...state, cookie : payload }
      default:
        return state
  }

}

export default companyReducer