const express = require('express');
const app = express();
const config = require('./config');
const db = require('./src/databases/db');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());

app.listen(config.port, () => {
  console.log(`Localhost is running : ${config.hostUrl}`)
})