import express from "express";
import "dotenv/config.js";
import home from "./routes/home";
import user from "./routes/user";
const app = express();

app.use(home);
app.use(user);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`Server Up and running on port:${process.env.PORT}`)
);