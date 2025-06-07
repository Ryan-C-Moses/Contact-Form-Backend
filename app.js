import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import connectDB from "./config/db.js";
import Entry from "./models/entry.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to DB
connectDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  try {
    const data = await Entry.find();
    res.send(data);
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal server error: " + e.message);
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);
  const entry = req.body;
  try {
    await Entry.create({ ...entry });
    res.status(200).send("Form submitted successfully");
  } catch (e) {
    console.log(e);
    res.status(500).send("Internal server error");
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
