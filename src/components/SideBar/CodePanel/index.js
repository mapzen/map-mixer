import React from 'react'
import { connect } from 'react-redux'

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

const getCurrentCode = ({ currentBaseMap, currentLabel, currentColor }) => {
  const baseMapURL = currentBaseMap.baseURL
  const labelURL = `${currentLabel.baseURL}${currentLabel.value}${currentLabel.suffixURL}`
  if (currentBaseMap.title === 'refill') {
    const colorThemeURL = `${currentColor.baseURL}${currentColor.value}${currentColor.suffixURL}`
    return `${baseMapURL},
      ${labelURL},
      ${colorThemeURL}`
  } else {
    return `${baseMapURL},
      ${labelURL}`
  }
}

const CodePanel = (props) => (
    <div className='col-sm-12'>
        <pre>
          {codeSnippetPrefix}
          {getCurrentCode(props)}
          {codeSnippetSuffix}
        </pre>
      </div>)

export default CodePanel