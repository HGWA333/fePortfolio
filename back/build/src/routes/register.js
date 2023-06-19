import Register from "../../dataBase/models/register.js";
import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();
const router = Router();
router.post("/join", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, userid } = req.body;
    try {
      const existingUser = yield Register.findOne({ where: { email } });
      if (existingUser) {
        return res
          .status(400)
          .json({ success: false, message: "이미 등록된 이메일 주소 입니다." });
      }
      const user = yield Register.create({ username, email, password });
      res
        .status(201)
        .json({ success: true, message: "회원 가입이 완료되었습니다.", user });
    } catch (err) {
      res
        .status(500)
        .json({ success: false, message: "서버 오류 입니다.", err });
      console.error(err);
    }
  })
);
router.post("/leave", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, userid } = req.body;
    try {
      res.status(201).json("a");
    } catch (err) {
      console.error(err);
    }
  })
);
export default router;
