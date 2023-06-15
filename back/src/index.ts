import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

import routes from "./routes/index";
import db from "../dataBase/models/index";
const app: Express = express();

dotenv.config();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connectToDB = async () => {
  try {
    await db.sequelize.sync({ force: false });
    console.log("db connected");
  } catch (err) {
    console.error(err);
  }
};

connectToDB();

app.use("/api", routes);

app.listen(8080, () => {
  console.log(`${8080} server open`);
  // console.log(`server is running on ${process.env.ORIGIN}:${process.env.PORT}`);
});
