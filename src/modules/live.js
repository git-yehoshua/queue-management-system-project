import React from 'react'
import './styles/live.css'

function Live() {
  return (
    <div className='live-main-wrap'>
        <div className='service-side-wrap'>
            <h1>Service Side</h1>
            <div className='window'>
              Window 1
            </div>
            <div className='window'>
              Window 2
            </div>
            <div className='window'>
              Window 3
            </div>
        </div>
        <div className='video-side-wrap'>
            video here
        </div>
    </div>
  )
}

export default Live