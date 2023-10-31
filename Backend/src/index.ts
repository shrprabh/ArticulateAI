import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
// We are just importing code from app.ts
//Connection and listeners
connectToDatabase()
  .then(() => {
    //Changed Port to 5000
    app.listen(5004, () => console.log("Server Open & Connected to Database "));
  })
  .catch((err) => console.log(err));
