import express from "express";
import bodyParser from "body-parser";
import { data } from "./models/data.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  try {
    res.send(data);
  } catch (e) {
    res.status(500).send('Internal server error: ' + e.message);
  }
});
app.post("/", () => {});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
