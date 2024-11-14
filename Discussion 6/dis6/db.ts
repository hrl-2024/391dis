import { MongoClient, Db, Collection } from "mongodb";

const MONGO_URL = process.env.MONGO_URL as string;
if (!MONGO_URL) {
  throw new Error("Please define the MONGO_URL environment variable");
}

const DB_NAME = "cs391-message-board";
export const POSTS_COLLECTION = "posts-collection";

let client: MongoClient | null = null;
let db: Db | null = null;

async function connect(): Promise<Db> {
    if (!client) {
        client = new MongoClient(MONGO_URL);
        await client.connect();
    }
    
    return client.db(DB_NAME);
}

export default async function getCollection(
    collectionName: string
): Promise<Collection> {
    if (!db) {
        db = await connect();
    }
    
    return db.collection(collectionName);
}