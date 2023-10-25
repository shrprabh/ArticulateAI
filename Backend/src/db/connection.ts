import { connect, disconnect } from "mongoose";

export default async function connectToDatabase() {
  try {
    // Taking the value from Environment file 
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Connect to MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Connect to MongoDB");
  }
}
export {connectToDatabase,disconnectFromDatabase}