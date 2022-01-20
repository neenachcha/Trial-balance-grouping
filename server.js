import express from 'express';
const app = express();
const port = 3000;
import bodyParser from 'body-parser';
import save from './database.js';
import path from 'path';
const __dirname = path.resolve();

app.use(bodyParser.json());
app.use('/uploadtb', express.static(__dirname + '/client/dist'));

app.get('/', (req, res) => {
  res.send('Home page')
});

app.post('/uploadtb', (req, res) => {

  var fsElements = {
    'companyName': '',
    'year': '',
    'asset': 0,
    'liability': 0,
    'equity': 0,
    'revenue': 0,
    'expense': 0
  };

  var tbElements = {...req.body};

  for (var key in tbElements) {
    var tbElement = tbElements[key];
    if (key === 'companyName') {
      fsElements[key] = tbElement;
    } else if (key === 'year') {
      fsElements[key] = tbElement;
    } else {
      var amount = Number(tbElement[0]);
      var group = tbElement[1];
      if (fsElements[group] !== undefined) {
        fsElements[group] += amount;
      }
    }
  }

  save(fsElements);
  res.send(fsElements);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});