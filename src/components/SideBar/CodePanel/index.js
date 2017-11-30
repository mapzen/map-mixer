import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'
import MapData from '../../../static/mapzen-maps'

/* This prevents screen reader from reading the main window
  when it needs to read modal window */

ReactModal.setAppElement('#root')

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
  constructor () {
    super()
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal () {
    this.setState({ showModal: true })
  }

  handleCloseModal () {
    this.setState({ showModal: false })
  }

  render () {
    return (
      <div className='col-xs-12'>
        <button
          className='btn btn-with-arrow'
          onClick={this.handleOpenModal}>Show Code</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel='Minimal Modal Example'
        >
          <pre>
            {codeSnippetPrefix}
            {this.props.currentCode}
            {codeSnippetSuffix}
          </pre>
          <button
            className='btn btn-with-arrow'
            onClick={this.handleCloseModal}>
            Close
          </button>
        </ReactModal>
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
