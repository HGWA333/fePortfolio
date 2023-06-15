import { Router, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

router.post("/list", async (req: Request, res: Response) => {
  try {
    res.status(201).json("a");
  } catch (err) {
    console.error(err);
  }
});

export default router;
