import express from "express";
const app = express();
// Creating a routes
// GET - Get the data from the backend database
// PUT -When we want to update the database
// DELETE - If we want to send some data to delete the request
// POST - Used to insert the data basically used for registration
// app.use() which is used to define middleware which will help in telling  the application that will be using
// json for incoming and outgoing request for the application
app.use(express.json());
// Put and Get ss Similar to post
app.post("/hello", (req, res, next) => {
    // Next is used to move to next available middleware
    console.log(req.body);
    return res.send("Hello");
});
// if we are sending some id in a URL route then we can access that using the id
app.delete("/user/:userId", (req, res, next) => {
    // Next is used to move to next available middleware
    console.log(req.params.userId);
    return res.send("Delete Request");
});
// Port where we want tp configure
app.listen(5001, () => console.log("Server Open"));
//# sourceMappingURL=index.js.map