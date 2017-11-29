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

export const loadingMapDone = val => {
  return {
    type: 'LOADING_MAP_DONE',
    val
  }
}