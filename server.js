const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`Server is connected`);
})