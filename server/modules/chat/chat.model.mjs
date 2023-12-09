import { ObjectId } from "mongodb";
import log from "@ajar/marker";
import { db } from "../../db/mongo.connection.mjs";

log.yellow(`user.model loaded...`, 'db: ' + db);