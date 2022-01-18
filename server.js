import express from "express";
import "dotenv/config.js";
import { router as homeRoutes } from "./routes/home.js";
import { router as userRoutes } from "./routes/user.js";
const app = express();

app.use(homeRoutes);
app.use(userRoutes);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`Server Up and running on port:${process.env.PORT}`)
);