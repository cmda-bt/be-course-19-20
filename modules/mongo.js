const {MongoClient} = require('mongodb');
require('dotenv').config()

const uri = process.env.MONGO_URI

async function findInDb(collection, searchValue){

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
 
    try {
		await client.connect();

		const db = client.db('db');

		const festivals = await db.collection(collection).find(searchValue).toArray();
		return festivals	
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

module.exports = { findInDb }
