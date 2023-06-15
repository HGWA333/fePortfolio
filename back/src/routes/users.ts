import Users from "../../dataBase/models/users";
import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
  }
});

router.post("/logout", async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await Users.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
  }
});
export default router;
