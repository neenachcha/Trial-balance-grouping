const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/uploadtb', express.static(__dirname + '/client/dist'));

app.get('/', (req, res) => {
  res.send('Home page')
});

app.post('/uploadtb', (req, res) => {

  var fsElements = {
    'asset': 0,
    'liability': 0,
    'equity': 0,
    'revenue': 0,
    'expense': 0
  };

  var tbElements = req.body;
  for (var key in tbElements) {

    var tbElement = tbElements[key];
    var amount = Number(tbElement[0]);
    var group = tbElement[1];

    if (fsElements[group] !== undefined) {
      fsElements[group] += amount;
    }

  }

  res.send(fsElements);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});