import React from 'react'
import { connect } from 'react-redux'
import Map from './Map';
import LoadingMessage from './LoadingMessage'
import { loadingMapDone } from '../store/actions'

class MapContainer extends React.Component {
  render () {
    return (
      <div className="map-container">
        <Map
          mapProps = {this.props}
          loadingMapDone = {this.props.loadingMapDone} />
        <LoadingMessage
          loading = {this.props.loadingMap}
         />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => {
  return {
    loadingMapDone: () => {
      dispatch(loadingMapDone())
    }
  }
}

const ConnectedMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer)

export default ConnectedMap
