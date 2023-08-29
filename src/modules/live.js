import React, { useEffect, useState } from 'react'
import './styles/live.css'
// import socketIOClient from 'socket.io-client';

function Live() {
  // const [servingNumber, setServingNumber] = useState('');
  // const [window1Number, setWindow1Number] = useState('');
  // const socket = socketIOClient('http://localhost:4001');

  // useEffect(() => {
  //   const rootElement = document.documentElement;
  //   if (rootElement.requestFullscreen) {
  //     rootElement.requestFullscreen();
  //   }
  
  //   return () => {
  //     if (document.exitFullscreen) {
  //       document.exitFullscreen();
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   socket.on('update',(newServingNumber) => {
  //     setServingNumber(newServingNumber);
  //   });

  //   socket.on('newServingNumber', (updatedServingNumber) => {
  //     // Update the serving number for window 1
  //     setWindow1Number(updatedServingNumber);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // },[]);

  return (
    <div className='live-main-wrap'>
        <div className='service-side-wrap'>
            <div className='serve-text'>
              <h1>Now Serving</h1>
            </div>
            <div className='window'>
              Window 1
              <h1>
                {/* {window1Number} */}
              </h1>
            </div>
            <div className='window'>
              Window 2
            </div>
            <div className='window'>
              Window 3
            </div>
        </div>
        <div className='video-side-wrap'>
            <div className='message-bar'>
              <h1 className='moving-text'>ANNOUNCEMENT HERE</h1>
            </div>
        </div>
    </div>
  )
}

export default Live