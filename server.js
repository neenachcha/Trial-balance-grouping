const express = require('express');
const app = express();
const port = 3000;

var root = __dirname + '/client/dist';
app.use(express.static(root));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});