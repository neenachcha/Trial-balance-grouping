import mongoose from 'mongoose';
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/fsGen')

const fs = new Schema({
  'companyName': String,
  'year': String,
  'asset': Number,
  'liability': Number,
  'equity': Number,
  'revenue': Number,
  'expense': Number,
  'version': Number
});
const FS = mongoose.model('FS', fs);

var save = (fsElements) => {
  console.log('this is saved: ', fsElements);

  FS.find({
    companyName: fsElements.companyName,
    year: fsElements.year
  }, (err, docs) => {
    fsElements.version = docs.length + 1;
    var newFs = new FS(fsElements);
    newFs.save((err) => {
      if (err) {throw err};
    })
  })

}

var getFS = (callback) => {
  return FS.find({}, (err, docs) => {
    if (err) {throw err};
    console.log('1 send from database', docs);
    callback(docs);
  })
}




export {save, getFS};