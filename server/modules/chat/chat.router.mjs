// router modules handle incoming HTTP requests related to the user resource.
// the HTTP layer is responsible for:
// parsing the request body
// validating the request body
// calling the appropriate service layer function
// returning the appropriate HTTP status code
import express from 'express';
import log from '@ajar/marker';
import * as chat_controller from "./chat.controller.mjs";
/* 
  if there is an error thrown in the DB, asyncMiddleware
  will pass it to next() and express will handle the error */
import raw from "../../middleware/route.async.wrapper.mjs";


log.magenta(`chat.router loaded...`);

const router = express.Router();

// parse json req.body on post routes
router.use(express.json())

//checking chat
router.post("/chat",raw(async (req, res) => {
    //console.log("at chat router");
    res.status(200).json({ status: "chat page" });
        
  }));

export default router;

