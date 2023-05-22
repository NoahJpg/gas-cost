const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(express.json());

app.use(cors());

app.post('/api/maps', async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.body.input}&key=${process.env.REACT_APP_GMAP_KEY}`
    );

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
