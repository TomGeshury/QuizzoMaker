const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', express.static(path.join(__dirname, '/../dist')));

app.listen(3000, () => console.log('App listening on port 3000...'));
