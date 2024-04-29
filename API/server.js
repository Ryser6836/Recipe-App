import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from "./routes/user.js";
const app = express();

app.use(bodyParser.json());

// userRouter
app.use('/api', userRouter);

mongoose.connect("mongodb+srv://jupilgag22:eAEUi4odvfsRfZWh@cluster0.hvsuo8o.mongodb.net/",
{
    dbName: "MERN_Recipe_App" 
}
).then(() => console.log("Connected to MongoDB")).catch((err) =>console.log(err.message));

const port = 3000;

app.listen(port, () => console.log(`server is running on port ${port}`));
