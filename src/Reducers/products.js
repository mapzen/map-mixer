import { combineReducers } from 'redux'

const labelPlaceHolder = {
  "baseURL": "https://mapzen.com/carto/bubble-wrap-style/8/themes/label-",
  "suffixURL": ".zip",
  "type": "range",
  "minValue": 0,
  "maxValue": 10,
  "value":0
}
const basemapHolder = {
  "title": "cinnabar",
  "id":1,
  "baseURL": "https://mapzen.com/carto/cinnabar-style/8/cinnabar-style.zip"
}
const colorHolder = {
  "type": "select",
  "baseURL":  "https://mapzen.com/carto/refill-style/9/themes/color-",
  "suffixURL": ".zip",
  "values": ["black", "gray", "blue", "sepia", "pink", "pink-yellow", "brown-orange", "blue-gray", "high-contrast", "inverted", "purple-green", "gray-gold", "zinc.zip"]
}

const byId = (state = {}, action) => {
  switch(action.type) {
    case 'RECEIVE_PRODUCTS':
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {})
      }
    default:
      return state
  }
}

const basemapOptions = (state = [], action) => {
  switch(action.type) {
    case 'RECEIVE_PRODUCTS':
      return action.products.map((product) => {
          let obj = {}
          obj.id = product.id;
          obj.title = product.title;
          return obj;
        })
    default:
      return state
  }
}

const raw = (state = {}, action) => {
  switch(action.type) {
    case 'RECEIVE_PRODUCTS':
      return action.products
    default:
      return state
  }
}

export const getProduct = (state, id) => state.products.byId[id]
export const getAllRawProducts = state => state.products.raw

export const getBasemapOptions = (state) => state.products.basemapOptions

export const getCurrentBaseMap = (state) => (state.sidebar.baseMapId)?  state.products.byId[state.sidebar.baseMapId]: basemapHolder
export const getCurrentLabel = (state) => {
  return (state.sidebar.baseMapId)? {...getCurrentBaseMap(state)['attributes']['label'], value: state.sidebar.labelDetail}: labelPlaceHolder
}
export const getCurrentColor = (state) => (state.sidebar.baseMapId)? {...getCurrentBaseMap(state)['attributes']['colors'], value: state.sidebar.colorTheme}: colorHolder

export default combineReducers({byId, basemapOptions, raw})