import React from 'react'
import { connect } from 'react-redux'
import Map from '../components/Map'
import LoadingMessage from '../components/Map/LoadingMessage'
import { loadingMapDone } from '../Actions'
import { getMapLoadingStatus } from '../Reducers/map'
import { getCurrentBaseMap, getCurrentLabel, getCurrentColor } from'../Reducers/products'
import { getCurrentSidebar } from '../Reducers/sidebar'

const MapContainer = ({ currentBaseMap, currentLabel, currentColor, sidebarParams, loading, loadingMapDone }) => {
  return (<div className='map-container'>
    <Map
      baseMap={currentBaseMap}
      label={currentLabel}
      color={currentColor}
      sidebarParams={sidebarParams}
      loading = {loading}
      loadingMapDone={loadingMapDone} />
    <LoadingMessage
      loading={loading}
    />
  </div>
)}


const mapStateToProps = function(state) {
  return {
    currentBaseMap: getCurrentBaseMap(state),
    currentLabel: getCurrentLabel(state),
    currentColor: getCurrentColor(state),
    sidebarParams: getCurrentSidebar(state),
    loading: getMapLoadingStatus(state)
  }
}

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
