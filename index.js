require('dotenv').config();
const express = require('express')
const cors = require('cors')
require('./connection/db')
const router = require('./Router/router')

const DailyCartServer = express()
DailyCartServer.use(cors())
DailyCartServer.use(express.json())
DailyCartServer.use(router)



const PORT = 3000 || process.env.PORT;

DailyCartServer.listen(PORT,() => {
  console.log(`DailyCartServer started at PORT: ${3000}`);
})

DailyCartServer.get('/',(req,res) => {
  res.send('<h1>Daily cart server started and waiting for client request...</h1>');
})