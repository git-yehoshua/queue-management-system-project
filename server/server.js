const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const cors = require('cors');
const newServer = require('./ticket/ticket');
const app = express();
app.use(cors());

// MySQL configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'queue',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to database');
  }
});

const path = require('path');
// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const absolutePath = path.join(__dirname, 'uploads');
    console.log('Absolute path:', absolutePath);
    cb(null, absolutePath);
  },
});

const upload = multer({ storage: storage });

// API endpoint for video upload
app.post('/api/upload', upload.single('video'), (req, res) => {
  try {
    const { filename } = req.file;
    console.log('Uploaded filename:', filename);
    // Store video information in the database
    const sql = 'INSERT INTO users (filename) VALUES (?)';
    db.query(sql, [filename], (err, result) => {
      if (err) {
        console.error('Error storing video in database:', err);
        res.status(500).json({ error: 'Error storing video' });
      } else {
        res.json({ url: `http://localhost:5000/uploads/${filename}` });
      }
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return res.status(500).json({ error: 'Error uploading file' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
