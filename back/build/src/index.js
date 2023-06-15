import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes/index.js";
import db from "../dataBase/models/index.js";
const app = express();
dotenv.config();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const connectToDB = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      yield db.sequelize.sync({ force: false });
      console.log("db connected");
    } catch (err) {
      console.error(err);
    }
  });
connectToDB();
app.use("/api", routes);
app.listen(8080, () => {
  console.log(`${8080} server open`);
});
