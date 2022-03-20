require('dotenv').config();
const path = require('path');

const express = require('express')
const app = express()
console.log(process.env.PORT);
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.get('/server', function (req, res) {
  res.send('server is available');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
