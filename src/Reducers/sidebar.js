const defaultState = {
  baseMap: 'bubble-wrap',
  baseMapId: 0,
  labelDetail: 0,
  colorTheme: 'black'
}

const sidebar = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_BASE_MAP': {
      return {
        ...state,
        baseMapId: action.val
      }
    }
    case 'CHANGE_LABEL_DETAIL':
      return {
        ...state,
        labelDetail: action.val
      }
    case 'CHANGE_COLOR_THEME':
      return {
        ...state,
        colorTheme: action.val
      }
    default:
      return state
  }
}

export const getCurrentSidebar = (state) => (state.sidebar.baseMap)? state.sidebar: defaultState

export default sidebar
