
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

async function connect() {
  console.log("Pretend to connect to MongoDB server");

  // Search by ID
  app.get('/search', async (req, res) => {
    const n = req.query.ID;
    if (!n) {
      return res.status(400).json({ message: 'Missing parameters' });
    }
    return res.json({ message: `Pretend to search for user with ID: ${n}` });
  });

  // Home route
  app.get('/', async (req, res) => {
    return res.json({ message: "Welcome to server" });
  });

  // Calculate difference
  app.get('/difference', async (req, res) => {
    const n = req.query.ID;
    if (!n) {
      return res.status(400).json({ message: 'Missing parameters' });
    }
    return res.json({ message: `Pretend to calculate difference for user with ID: ${n}` });
  });

  // Search all
  app.get('/searchAll', async (req, res) => {
    return res.json({ message: "Pretend to return all records" });
  });

  // Insert a new record
  app.post('/insert', async (req, res) => {
    const { ID, Start, End } = req.body;
    return res.json({ message: `Pretend to insert new record with ID: ${ID}, Start: ${Start}, End: ${End}` });
  });

  // Update a record
  app.post('/update', async (req, res) => {
    const { ID, NewId } = req.body;
    return res.json({ message: `Pretend to update record with ID: ${ID} to new ID: ${NewId}` });
  });

  // Delete a record
  app.post('/delete', async (req, res) => {
    const { ID } = req.body;
    return res.json({ message: `Pretend to delete record with ID: ${ID}` });
  });

  app.listen(port, () => console.log(`Listening on port ${port}`));
}

connect();
