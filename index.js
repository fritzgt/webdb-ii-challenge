const express = require('express');

const server = express();

//json parser for post
server.use(express.json());

const port = 7000;

//Create dbconfig and require it here for use
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

// Delete
server.delete('/cars/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await db('inventory')
      .where('id', '=', id)
      .delete();
    res.status(200).json({ Deleted: deleted });
  } catch {
    res.status(500).json({ Error: 'Cannot connect' });
  }
});

server.listen(port, () => console.log(`Listening on port ${port}`));
