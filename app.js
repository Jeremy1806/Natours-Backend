const fs = require('fs');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'trying express',
    app: 'natours',
  });
});

app.post('/', (req, res) => {
  res.status(201).json({
    message: 'done',
  });
});

const port = 8000;

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
