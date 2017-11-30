import defaultState from './defaultState'

const requestedMapDetails = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_BASE_MAP': {
      return {
        ...state,
        loadingMap: true,
        baseMap: action.val
      }
    }
    case 'CHANGE_LABEL_DETAIL':
      return {
        ...state,
        loadingMap: true,
        labelDetail: action.val
      }
    case 'CHANGE_COLOR_THEME':
      return {
        ...state,
        loadingMap: true,
        colorTheme: action.val,
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

export default requestedMapDetails
