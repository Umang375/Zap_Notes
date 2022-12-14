const connectToMongo = require('./db');
var cors = require('cors');


connectToMongo();

const express = require('express')
const app = express()
const port = 5000
const dotenv = require("dotenv")
dotenv.config()

app.use(cors());
app.use(express.json());

//Available for all routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
}) 