const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let lastTicketNumber = 0;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "customers",
});

// Retrieve the last inserted ticket number from the database
db.query(
  "SELECT MAX(ticketNumber) AS lastTicketNumber FROM customer",
  (err, result) => {
    if (result && result.length > 0 ) {
      lastTicketNumber = result[0].lastTicketNumber;
    }
  }
);

app.post("/ticket", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const ticketNumber = req.body.ticketNumber;

  db.query(
    "INSERT INTO customer (name, description, ticketNumber) VALUES (?, ?, ?)",
    [name, description, ticketNumber],
    (err, result) => {
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "Enter correct asked details" });
      }
    }
  );
});

app.get("/ticket/lastTicketNumber", (req, res) => {
  res.send({ lastTicketNumber });
});

app.listen(3002, () => {
  console.log("Running ticket server at 3002");
});