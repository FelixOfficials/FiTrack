import { Request, Response } from "express";
import { db } from "../prisma/db"

export const createExercise = async (req: Request, res: Response) => {
    const { name, muscleGroup, equipment} = req.body;

    const exercise = await db.orm.public.Exercise.create ({
        name,
        muscleGroup,
        equipment
    });

    res.json(exercise);
};

export const getExercises = async (req: Request, res: Response) => {
    const exercises = await db.orm.public.Exercise.all();
    res.json(exercises);
}