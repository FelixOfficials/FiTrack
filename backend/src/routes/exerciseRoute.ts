import { Router } from "express";
import { createExercise, getExercises, getExercisesById, updateExercise, deleteExercise } from "../controllers/exerciseController";

const router = Router();

router.post("/exercises", createExercise);
router.get("/exercises", getExercises);
router.get("/exercises/:id", getExercisesById);
router.put("/exercises/:id", updateExercise);
router.delete("/exercises/:id", deleteExercise);

export default router;