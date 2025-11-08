require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { get } = require('http');
const fs = require("fs").promises;
const app = express();
require('express-ws')(app);
app.use(cookieParser());

const PORT = process.env.PORT || 3001;
const USERS_PATH = "data/users.json";

 
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  res.redirect('https://minecraft-mp.com/server/350391/vote/');
});

app.listen(PORT, () => { });