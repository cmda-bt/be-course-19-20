const {MongoClient, ObjectId} = require('mongodb');
require('dotenv').config()

const uri = process.env.MONGO_URI

async function findInDb(collection, searchValue){

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 
    try {
		await client.connect();

		const db = client.db('db');

		const festivals = await db.collection(collection).find({ _id: {$ne: ObjectId('5e67a328ad68fa647500239c')} }).toArray();
		return festivals	
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function updateOne(collection, query, insert){

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 
    try {
		await client.connect();

        console.log({query, insert});

        const db = client.db('db');

		db.collection(collection).updateOne({"_id": ObjectId(query)}, insert, { upsert: true });	
 
    } catch (e) {
        console.error(e);
    }
}

module.exports = { findInDb, updateOne }
