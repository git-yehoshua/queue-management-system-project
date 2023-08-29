import React from 'react';
import '../styles/ticket.css'

function GeneratedTicket(props) {

  return (props.trigger) ? (
    <div className='popup-ticket'>
        <div className='ticket-inner'>
        <button className='close-button' onClick={() => { props.setTrigger(false); }}>
        Close
        </button>
            {props.children}
        </div>
    </div>
  ):  '';
}

export default GeneratedTicket