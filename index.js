const express = require('express');

const server = express();

server.use(express.json());

const port = 7000;

const db = require('./dbConfig');

//Read/get data
server.get('/cars', async (req, res) => {
  try {
    const data = await db.select('*').from('inventory');
    res.status(200).json({ data });
  } catch {
    res.status(500).json({ Error: 'Cannot connect' });
  }
});

server.post('/cars', async (req, res) => {
  const newCar = req.body;
  try {
    const data = await db('inventory').insert(newCar);
    res.status(200).json({ data });
  } catch {
    res.status(500).json({ Error: 'Cannot connect' });
  }
});

server.listen(port, () => console.log(`Listening on port ${port}`));
