import React from 'react'
import './LoadingMessage.css'

const LoadingMessage = ({loading}) => {
  const className = (loading) ? '' : 'hide'
  const messageString = 'Loading...'
  return (
    <div className={`loading-message ${className}`}>
      {messageString}
    </div>
  )
}

export default LoadingMessage
