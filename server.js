


// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { MongoClient } = require('mongodb');
// const express = require('express');
// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// const port = process.env.PORT|| 3000;
// const url = 'mongodb+srv://1910sharmaneha:Sunset@cluster0.5toireo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster';
// const database = 'Exam';

// async function connect() {
//   try {
//     const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
//     await client.connect();
//     console.log("Connected to Mongo server");

//     const db = client.db(database);
//     const bill = db.collection("bill");

//     app.get('/search', async (req, res) => {
//       const n = req.query.ID;
//       if (!n) {
//         return res.status(400).json({ message: 'Missing parameters' });
//       }
//       const name = await bill.findOne({ ID: n });
//       if (name) {
//         return res.json({ message: 'User found', name });
//       } else {
//         return res.status(404).json({ message: "User not found" });
//       }
//     });

//     app.get('/', async (req, res) => {
//                 try {
//                     //const rese = await bill.find().toArray();
//                     return res.json({message:"Welcome to server"});
//                 } catch (err) {
//                     return res.status(400).json("Unable to get data, can't connect to Mongo");
//                 }
//             });

//     app.get('/difference', async (req, res) => {
//       const n = req.query.ID;
//       if (!n) {
//         return res.status(400).json({ message: 'Missing parameters' });
//       }
//       const user = await bill.findOne({ ID: n });
//       if (user) {
//         const start = user.Start;
//         const end = user.End;
//         const difference = end - start;
//         return res.json({ message: 'Difference calculated', difference });
//       } else {
//         return res.status(404).json({ message: "User not found" });
//       }
//     });

//     app.get('/searchAll', async (req, res) => {
//       const rese = await bill.find().toArray();
//       return res.json(rese);
//     });

//     app.post('/insert', async (req, res) => {
//       const { ID, Start, End } = req.body;
//       await bill.insertOne({ ID, Start, End });
//       return res.json({ message: 'Inserted values successfully' });
//     });

//     app.post('/update', async (req, res) => {
//       const { ID, NewId } = req.body;
//       const updatedDocument = await bill.findOneAndUpdate(
//         { ID },
//         { $set: { ID: NewId } },
//         { returnOriginal: false }
//       );

//       if (updatedDocument.value) {
//         return res.json({ message: 'Document updated successfully' });
//       } else {
//         return res.status(404).json({ message: 'Document with given ID not found' });
//       }
//     });

//     app.post('/delete', async (req, res) => {
//       const { ID } = req.body;
//       const deletedDocument = await bill.findOneAndDelete({ ID });

//       if (deletedDocument.value) {
//         return res.json({ message: 'Document deleted successfully' });
//       } else {
//         return res.status(404).json({ message: 'Document with given ID not found' });
//       }
//     });

//   } catch (e) {
//     console.error("Could not connect to server", e);
//   }
// }

// app.listen(port, () => console.log(`Listening on port ${port}`));

// connect();




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
