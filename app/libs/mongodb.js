import { MongoClient } from "mongodb";


if (!process.env.MONGO_URI) {
  throw new Error("La variable d'environnement MONGO_URI n'est pas définie !");
}

const uri = process.env.MONGO_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "defaultDatabase");
    return { client, db };
  } catch (error) {
    console.error("Erreur de connexion à MongoDB :", error.message);
    console.error("Stack trace :", error.stack);
    throw new Error("Connexion MongoDB échouée. Vérifiez votre configuration.");
  }
}
