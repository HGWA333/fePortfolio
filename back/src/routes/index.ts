import { Router } from "express";

import register from "./register";
import board from "./board";
import users from "./users";
import poolList from "./poolList";

const router = Router();

router.use("/register", register);
router.use("/board", board);
router.use("/users", users);
router.use("/poolList", poolList);

export default router;
