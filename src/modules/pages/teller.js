import socketIOClient from 'socket.io-client';
import React, { useState, useEffect } from 'react';
import '../styles/teller.css';
import DropdownMenu from '../components/DropdownMenu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircleArrowRight,
         faBullhorn } from '@fortawesome/free-solid-svg-icons';


const synth = window.speechSynthesis;

function Teller() {
  const [servingNumber, setServingNumber] = useState(0);
  const [voices, setVoices] = useState([]);
  const [newServingNumber, setNewServingNumber] = useState(0);
  const socket = socketIOClient('http://localhost:5000');

  useEffect(() => {
    // Get the list of available voices
    const voiceList = synth.getVoices();
    setVoices(voiceList);

    return () => {
      socket.disconnect();
    };
  }, []);


  const handleNextClick = () => {
    const updatedServingNumber = servingNumber + 1;
    setServingNumber(updatedServingNumber);
    setNewServingNumber(updatedServingNumber);

    speak(`Now serving Customer number: ${formatServingNumber(updatedServingNumber)}`);

    socket.emit('newServingNumber', updatedServingNumber);
  };

  const handleNotifyClick = () => {
  speak(`Calling customer number: ${formatServingNumber(newServingNumber)}. Please proceed to Window 1.`);
  }

  const handleStartLiveMonitorClick = () => {
    const rootElement = document.documentElement;
    if(rootElement.requestFullscreen) {
      rootElement.requestFullscreen();
    }
    const liveWindow = window.open('http://localhost:3000/live', '_blank');
  if (liveWindow) {
    liveWindow.addEventListener('load', () => {
      liveWindow.document.documentElement.requestFullscreen();
    });
  }
  };

  const speak = (text) => {
    if (synth && synth.speaking) {
      synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);

    // Find a female voice
    const femaleVoice = voices.find(voice => voice.name.includes('Female'));
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    synth.speak(utterance);
  };

  const formatServingNumber = (number) => {
    return number.toString().padStart(3, '0');
  };

  return (
    <div>
      <div className='main-wrapper'>
        <DropdownMenu/>
        <div className='sub-wrapper'>
        <div className='control-side'>
          <div>
          <button onClick={handleStartLiveMonitorClick}>Start Live Monitor</button>
        </div>
          <div className='now-serving-wrap'>
            <div className='serving-title-wrap'>
              <h3 className='now-serving-text'>Now Serving</h3>
            </div>
            <div className='serving-number-wrap'>
              <h1 className='serving-number'> {formatServingNumber(servingNumber)}</h1>
            </div>
          </div>
        <div>
          <button className='next-button' onClick={handleNextClick}>
          <FontAwesomeIcon icon={faCircleArrowRight} /> Next
          </button>
        </div>
        <div>
          <button className='notify-button' onClick={handleNotifyClick}>
          <FontAwesomeIcon icon={faBullhorn} />Notify</button>
        </div>
        </div>
        <div className='preview-side'>
          <h1>PREVIEW</h1>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Teller;
