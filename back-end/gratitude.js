const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/people', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const peopleSchema = new mongoose.Schema({
    name: String,
    sentence: String,
    country: String
});

peopleSchema.virtual('id')
    .get(function() {
        return this._id.toHexString();
    });

peopleSchema.set('toJSON', {
    virtuals: true
});

const Person = mongoose.model('Person', peopleSchema);

app.get('/api/people', async (req, res) => {
  try {
    let people = await Person.find();
    res.send({people: people});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/people', async (req, res) => {
    const person = new Person({
    name: req.body.name,
    sentence: req.body.sentence,
    country: req.body.country
  });
  try {
    await person.save();
    res.send({person:person});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/people/:id', async (req, res) => {
  try {
    await Person.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));