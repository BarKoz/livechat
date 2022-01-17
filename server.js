import express from "express";
import "dotenv/config.js";
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`Server Up and running on port:${process.env.PORT}`)
);