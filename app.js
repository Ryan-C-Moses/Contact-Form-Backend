import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", () => {

});
app.post("/", () => {});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
