import React from 'react'
import { connect } from 'react-redux'

import MapData from '../../../static/mapzen-maps'

const codeSnippetPrefix = `
  L.Mapzen.apikey = 'your-mapzen-key'
  L.Mapzen.map('map', {
    tangramOptions: {
      scene: {
        import: [`

const codeSnippetSuffix = `
    ]}
  }
})`

const getCurrentCode = (state) => {
  const baseMapURL = MapData[state.baseMap].baseURL
  const labelURL = `${MapData[state.baseMap].attributes.label.baseURL}${state.labelDetail}${MapData[state.baseMap].attributes.label.suffixURL}`
  if (state.baseMap === 'refill') {
    const colorThemeURL = `${MapData[state.baseMap].attributes.colors.baseURL}${state.colorTheme}${MapData[state.baseMap].attributes.colors.suffixURL}`
    return `${baseMapURL},
      ${labelURL},
      ${colorThemeURL}`
  } else {
    return `${baseMapURL},
      ${labelURL}`
  }
}

class CodePanel extends React.Component {
  render () {
    return (
      <div className='col-sm-12'>
        <pre>
          {codeSnippetPrefix}
          {this.props.currentCode}
          {codeSnippetSuffix}
        </pre>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentCode: getCurrentCode(state)
  }
}

export default connect(mapStateToProps)(CodePanel)
