import React from 'react'
import { connect } from 'react-redux'
import ControllerWrapper from '../components/Sidebar/Controllers'
import CodePanel from '../components/Sidebar/CodePanel'
import { changeBaseMap, changeLabelDetail, changeColorTheme } from '../Actions/'
import { getAllRawProducts, getBasemapOptions, getCurrentBaseMap, getCurrentLabel, getCurrentColor } from'../Reducers/products'
import { getCurrentSidebar } from'../Reducers/sidebar'

const SidebarContainer = ({allMaps, basemapOptions, currentBaseMap, currentLabel, currentColor, sidebarParams, changeBaseMapValue, changeLabelDetailValue, changeColorThemeValue}) => {
  return (<div className='sidebar-container'>
      <ControllerWrapper
        currentBaseMap = {currentBaseMap}
        currentLabel = {currentLabel}
        currentColor = {currentColor}
        basemapOptions = {basemapOptions}
        sidebarParams = {sidebarParams}
        changeBaseMapValue = {changeBaseMapValue}
        changeLabelDetailValue = {changeLabelDetailValue}
        changeColorThemeValue = {changeColorThemeValue} />
      <CodePanel 
        currentBaseMap = { currentBaseMap}
        currentLabel = {currentLabel}
        currentColor = {currentColor} />
    </div>
  )
}

const mapStateToProps = function(state) {
  return {
    allMaps: getAllRawProducts(state),
    basemapOptions: getBasemapOptions(state),
    currentBaseMap: getCurrentBaseMap(state),
    currentLabel: getCurrentLabel(state),
    currentColor: getCurrentColor(state),
    sidebarParams: getCurrentSidebar(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeBaseMapValue: baseMapType => {
      dispatch(changeBaseMap(baseMapType))
    },
    changeLabelDetailValue: detailNum => {
      dispatch(changeLabelDetail(detailNum))
    },
    changeColorThemeValue: colorTheme => {
      dispatch(changeColorTheme(colorTheme))
    }
  }
}

const ConnectedSidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarContainer)

export default ConnectedSidebar
