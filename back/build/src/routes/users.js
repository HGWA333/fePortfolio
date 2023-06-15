import Users from "../../dataBase/models/users.js";
import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();
const router = Router();
router.post("/login", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const users = yield Users.findAll();
      res.json(users);
    } catch (err) {
      console.error(err);
    }
  })
);
router.post("/logout", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { name, email, password } = req.body;
      const newUser = yield Users.create({ name, email, password });
      res.status(201).json(newUser);
    } catch (err) {
      console.log(err);
    }
  })
);
export default router;
