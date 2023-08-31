import React, { useState, useEffect } from "react";
import "../styles/ticket.css";
import GeneratedTicket from "../components/GeneratedTicket";
import axios from "axios";

function Ticket() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ticketNumber, setTicketNumber] = useState(0);
  const [buttonPopUp, setButtonPopup] = useState(false);

  useEffect(() => {
    // Retrieve the last ticket number from the database
    axios.get("http://localhost:3002/ticket/lastTicketNumber")
      .then((response) => {
        if (response.data.lastTicketNumber) {
          setTicketNumber(response.data.lastTicketNumber + 1);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the ticket to the database
    axios
      .post("http://localhost:3002/ticket", {
        name: name,
        description: description,
        ticketNumber: ticketNumber,
      })
      .then((response) => {
        if (response.data.message) {
          setTicketNumber(response.data.message);
        } else {
          setTicketNumber(ticketNumber + 1); // Increment ticket number
        }
      })
      .catch((error) => {
        console.log(error);
      });

    const ticket = {
      name,
      description,
      date: new Date().toLocaleDateString(),
      ticketNumber: ticketNumber.toString().padStart(3, "0"), // Convert ticket number to string and pad with leading zeros
    };

    // window.print();
  };

  return (
    <div>
      <div className="ticket-wrap" style={{ width: "300px" }}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" onClick={() => setButtonPopup(true)}>
            Generate Ticket
          </button>
        </form>
      </div>

      <GeneratedTicket trigger={buttonPopUp} setTrigger={setButtonPopup}>
        <div>
          <h2>Generated Ticket</h2>
          {ticketNumber && <h1>Ticket Number: {ticketNumber}</h1>}
          <h3>Name: {name} </h3>
          <h3>Description: {description}</h3>
        </div>
      </GeneratedTicket>
    </div>
  );
}

export default Ticket;