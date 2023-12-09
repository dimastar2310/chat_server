//require('dotenv').config();
import express from 'express'
import morgan from 'morgan'
import log from '@ajar/marker'
import cors from 'cors'

import {connect_db} from './db/mongo.connection.mjs';
import user_router from './modules/user/user.router.mjs';
import chat_router from './modules/chat/chat.router.mjs';


import {error_handler,error_handler2,not_found} from './middleware/errors.handler.mjs';   

const { 
  PORT = 8080,
  HOST = 'localhost', 
  DB_URI,
  DB_NAME
 } = process.env;

const app = express();

//log.red(`the DBNAME  IS =${DB_NAME}`);
//log.red(`the PORT  IS =${PORT}`);
// middleware
app.use(cors());
app.use(morgan('dev'));

// routing
// app.use('/api/stories', story_router);
app.use('/api/users', user_router);
app.use('/api/users', chat_router);

// central error handling
//if error happens does functionion will be triggered
//app.use(error_handler);
//app.use(error_handler2);

//when no routes were matched...
app.use('*', not_found);

//start the express api server
(async ()=> {
  //connect to mongo db
  await connect_db(DB_URI,DB_NAME);  
  await app.listen(PORT,HOST);
  log.magenta(`api is live on`,` ✨ ⚡  http://${HOST}:${PORT} ✨ ⚡`);  
})().catch(log.error);