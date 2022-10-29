require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { v4 } = require('uuid');
const path = require('path');
const publicPath = path.join(__dirname, 'build');
const router = require('./router');
const sequelize = require('./models/index');

const PORT = process.env.PORT || 3030
const NODE_ENV = process.env.NODE_ENV || 'development'
app.use(express.static('client/build'));

app.use(cors());
app.use(express.json());
app.use(router);


if (NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    console.log('in')
    console.log(path.join(`${__dirname}`, '../', 'build', 'index.html'))
    res.sendFile(path.resolve(__dirname, '../', 'build', 'index.html'));
  });
}

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log('server running on 3030')
})