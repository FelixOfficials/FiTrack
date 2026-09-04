import { Router } from "express";
import { createExercise, getExercises } from "../controllers/exerciseController";

const router = Router();

router.post("/exercises", createExercise);
router.get("/exercises", getExercises);

export default router;