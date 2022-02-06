require('dotenv').config();

const express = require('express')
const app = express()
console.log(process.env.PORT);
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', function (req, res) {
  res.send('available');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
