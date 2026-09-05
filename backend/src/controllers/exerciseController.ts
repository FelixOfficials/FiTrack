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

export const getExercisesById = async (req: Request, res: Response) => {
    const wantedId = Number(req.params.id);
    const exercise = await db.orm.public.Exercise.where({id: wantedId}).first();
    res.json(exercise);
}

export const updateExercise = async (req: Request, res: Response) => {
    const wantedId = Number(req.params.id);
    const updated = await db.orm.public.Exercise.where({id: wantedId}).update( {
        ...(req.body.name !== undefined && { name: req.body.name }),
        ...(req.body.muscleGroup !== undefined && { muscleGroup: req.body.muscleGroup }),
        ...(req.body.equipment !== undefined && { equipment: req.body.equipment })
    } );

    res.json(updated);
}

export const deleteExercise = async (req: Request, res: Response) => {
    const wantedId = Number(req.params.id);
    await db.orm.public.Exercise.where({id: wantedId}).delete();
    res.json({ message: "Exercise Deleted"});
};
