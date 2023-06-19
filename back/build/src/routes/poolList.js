import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();
const router = Router();
router.post("/list", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      res.status(201).json("a");
    } catch (err) {
      console.error(err);
    }
  })
);
export default router;
