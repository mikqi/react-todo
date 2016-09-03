const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/todoreact');

const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    message: `success`,
  });
});

app.use('/api', require('./routes/api'));

app.listen(PORT, () => {
  console.log(`server run in port ${PORT}`);
});
