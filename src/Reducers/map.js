const map = (state = {loadingMap: false}, action) => {
  /* any action requiring map redrawing should make loading status true */
  switch(action.type) {
    case 'CHANGE_BASE_MAP':
      return {
        ...state,

        loadingMap: true
      }
    case 'CHANGE_LABEL_DETAIL':
      return {
        ...state,
        loadingMap: true
      }
    case 'CHANGE_COLOR_THEME':
      return {
        ...state,
        loadingMap: true
      }
    case 'LOADING_MAP_STARTED':
      return {
        ...state,
        loadingMap: true
      }
    case 'LOADING_MAP_DONE':
      return {
        ...state,
        loadingMap: false
      }
    default:
      return state
  }
}

export const getMapLoadingStatus = (state) => state.map.loadingMap

export default map