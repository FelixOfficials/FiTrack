import { useState, useEffect } from "react";

type Exercise = {
    id: number;
    name: string;
    muscleGroup: string | null;
    equipment: string | null;
}

export default function Exercises() {
    const [exercises, setExercises] = useState<Exercise []>([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/exercises").then((res) => res.json()).then((data) => setExercises(data));
    }, []);

    return (
        <div>
            <h1>Exercises</h1>

            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise.id}>
                        {exercise.name} : {exercise.muscleGroup} : {exercise.equipment}
                    </li>
                ))}
            </ul>
        </div>
    );
}