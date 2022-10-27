const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/note_taking_util';

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('Connected to Mongo');
    });
}

module.exports = connectToMongo;