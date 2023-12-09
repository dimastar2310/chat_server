import { ObjectId } from "mongodb";
import log from "@ajar/marker";
import { db } from "../../db/mongo.connection.mjs";

log.yellow(`user.model loaded...`, 'db: ' + db);

// const users = db?.collection("users");
//const collection = db?.collection("Dima");

//console.log("the collection name is ?",collection);

export async function create(user) {
    return await db.collection("Dima").insertOne(user);
}

export async function getAll(page = 1, limit = 20) {
    log.magenta(`getAll()`, 'db: ' + db);
    log.red(`at user.model and type of page is ${typeof page}`);
    const users = db.collection("Dima");
    return await users.find()
                    .limit(limit)
                    .skip(limit * (page - 1))
                    .toArray();
}

export async function getOne(userId) {
    const users = db.collection("Dima");
    // const filter = { _id: userId };
    const filter = { _id: new ObjectId(userId) };
    return await users.findOne(filter);
}
export async function getOneByUser(user_name,pass) {
    const users = db.collection("Dima");
    // const filter = { _id: userId };
    log.red("at user.model")
    const filter = { user: user_name,password:pass };
    return await users.findOne(filter);
}

export async function updateOne(userId,payload) {
    const users = db.collection("Dima");
    const filter = { _id: new ObjectId(userId) };
    return await users.updateOne(filter, {$set: payload});
}

export async function replaceOne(userId,payload) {
    const users = db.collection("Dima");
    const filter = { _id: new ObjectId(userId) };
    return await users.replaceOne(filter, payload);
}

export async function deleteOne(userId) {
    const users = db.collection("Dima");
    const filter = { _id: new ObjectId(userId) };
    return await users.deleteOne(filter);
}