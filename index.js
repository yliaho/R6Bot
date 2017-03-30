const dotenv = require('dotenv').config({ path: './credentials/.env' });
snoowrap = require('snoowrap');
const r6all = require('./scripts/r6all');
const database = require('./scripts/store/lowdb')

r = new snoowrap({
  userAgent:    process.env.SW_USER_AGENT,
  clientId:     process.env.SW_BOT_ID,
  clientSecret: process.env.SW_SECRET,
  username:     process.env.SW_USER,
  password:     process.env.SW_PASSWORD
});

r.config({
  requestDelay: 1000,
  debug: false
});

setInterval(() => {
  r6all.loopAll();
}, 60000);
