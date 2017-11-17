const defaultState = {
  baseMap: 'bubble-wrap',
  colorTheme: 'black',
  labelDetail: 0
}

const requestedMapDetails = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_BASE_MAP': {
      return {
        baseMap: action.val,
        colorTheme: state.colorTheme,
        labelDetail: state.labelDetail
      }
    }
    case 'CHANGE_LABEL_DETAIL':
      return {
        baseMap: state.baseMap,
        colorTheme: state.colorTheme,
        labelDetail: action.val
      }
    case 'CHANGE_COLOR_THEME':
      return {
        baseMap: state.baseMap,
        colorTheme: action.val,
        labelDetail: state.labelDetail
      }
    default:
      return state
  }
}

export default requestedMapDetails
