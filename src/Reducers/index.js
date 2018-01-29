import { combineReducers } from 'redux'
import map from './map'
import products from './products'
import sidebar from './sidebar'

// const getProduct = (state, id) => products.getProduct(state.products, id);

export default combineReducers({
  map,
  products,
  sidebar
})
