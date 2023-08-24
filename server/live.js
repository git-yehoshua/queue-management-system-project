const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const LIVE_PORT = 4001; // Port for serving the Live page

app.use(express.static(path.join(__dirname, 'live-build'))); // Assuming 'live-build' contains the built Live page

app.get('/live', (req, res) => {
  res.sendFile(path.join(__dirname, 'live-build', 'index.html'));
});

const SOCKET_PORT = 5000; // Port for socket communication

io.on('connection', (socket) => {
  console.log('A client connected');

  // Send real-time updates to clients
  socket.on('newCustomer', (customerNumber) => {
    io.emit('update', customerNumber);
  });

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

server.listen(SOCKET_PORT, () => {
  console.log(`Socket server is running on port ${SOCKET_PORT}`);
});

app.listen(LIVE_PORT, () => {
  console.log(`Live page server is running on port ${LIVE_PORT}`);
});
