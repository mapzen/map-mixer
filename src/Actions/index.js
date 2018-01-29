import productInterface from '../API/interface'

const receiveMapData = maps => ({
  type: 'RECEIVE_PRODUCTS',
  products:maps
})

export const receiveAllMaps = () => dispatch => {
  productInterface.getProducts(maps => {
    dispatch(receiveMapData(maps))
  })
}

export const changeBaseMap = val => {
  return {
    type: 'CHANGE_BASE_MAP',
    val
  }
}

export const changeLabelDetail = val => {
  return {
    type: 'CHANGE_LABEL_DETAIL',
    val
  }
}

export const changeColorTheme = val => {
  return {
    type: 'CHANGE_COLOR_THEME',
    val
  }
}

export const loadingMapDone = () => {
  return {
    type: 'LOADING_MAP_DONE'
  }
}
