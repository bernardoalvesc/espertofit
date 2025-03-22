
export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  sets: number;
  reps: number;
  weight: string;
  notes?: string;
}

export interface Workout {
  id: string;
  name: string;
  exercises: Exercise[];
}

export interface PreloadedExercises {
  [key: string]: Exercise[];
}
