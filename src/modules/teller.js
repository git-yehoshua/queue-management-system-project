import React, { useState, useEffect } from 'react';
import './styles/teller.css';
import DropdownMenu from './hooks/DropdownMenu';

const synth = window.speechSynthesis;

function Teller() {
  const [servingNumber, setServingNumber] = useState(0);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    // Get the list of available voices
    const voiceList = synth.getVoices();
    setVoices(voiceList);
  }, []);

  const handleNextClick = () => {
    const newServingNumber = servingNumber + 1;
    setServingNumber(newServingNumber);

    speak(`Now serving Customer number: ${formatServingNumber(newServingNumber)}`);
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
        <div className='now-serving-wrap'>
          <div className='serving-title-wrap'>
            <h3 className='now-serving-text'>Now Serving</h3>
          </div>
          <div className='serving-number-wrap'>
            <h1 className='serving-number'> {formatServingNumber(servingNumber)}</h1>
          </div>
        </div>

        <div>
          <button className='next-button' onClick={handleNextClick}>Next</button>
        </div>
        <div>
          <button className='notify-button'>Notify</button>
        </div>
        <div>
          <button>Start Live Monitor</button>
        </div>
      </div>
    </div>
  );
}

export default Teller;
