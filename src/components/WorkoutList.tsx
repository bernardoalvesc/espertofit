
import React, { useState } from 'react';
import { PlusCircle, Trash, Edit2, Save, Dumbbell, Check, X } from 'lucide-react';
import { Workout } from '../types';
import ExerciseCard from './ExerciseCard';
import { toast } from 'sonner';

interface WorkoutListProps {
  workouts: Workout[];
  onAddWorkout: () => void;
  onDeleteWorkout: (id: string) => void;
  onUpdateWorkout: (workout: Workout) => void;
  onSelectWorkout: (workoutId: string) => void;
  selectedWorkoutId: string | null;
}

const WorkoutList = ({
  workouts,
  onAddWorkout,
  onDeleteWorkout,
  onUpdateWorkout,
  onSelectWorkout,
  selectedWorkoutId
}: WorkoutListProps) => {
  const [editingWorkoutId, setEditingWorkoutId] = useState<string | null>(null);
  const [editedWorkoutName, setEditedWorkoutName] = useState('');

  const handleEditWorkout = (workout: Workout) => {
    setEditingWorkoutId(workout.id);
    setEditedWorkoutName(workout.name);
  };

  const handleSaveWorkoutName = (workout: Workout) => {
    if (editedWorkoutName.trim() === '') {
      toast.error('O nome do treino não pode estar vazio');
      return;
    }

    onUpdateWorkout({
      ...workout,
      name: editedWorkoutName.trim()
    });
    
    setEditingWorkoutId(null);
    toast.success('Nome do treino atualizado!');
  };

  const handleCancelEditing = () => {
    setEditingWorkoutId(null);
  };

  const moveExerciseUp = (workout: Workout, index: number) => {
    if (index <= 0) return;
    
    const updatedExercises = [...workout.exercises];
    [updatedExercises[index], updatedExercises[index - 1]] = 
      [updatedExercises[index - 1], updatedExercises[index]];
    
    onUpdateWorkout({
      ...workout,
      exercises: updatedExercises
    });
  };

  const moveExerciseDown = (workout: Workout, index: number) => {
    if (index >= workout.exercises.length - 1) return;
    
    const updatedExercises = [...workout.exercises];
    [updatedExercises[index], updatedExercises[index + 1]] = 
      [updatedExercises[index + 1], updatedExercises[index]];
    
    onUpdateWorkout({
      ...workout,
      exercises: updatedExercises
    });
  };

  const handleDeleteExercise = (workout: Workout, exerciseId: string) => {
    const updatedExercises = workout.exercises.filter(
      (exercise) => exercise.id !== exerciseId
    );
    
    onUpdateWorkout({
      ...workout,
      exercises: updatedExercises
    });
    
    toast.success('Exercício removido!');
  };

  return (
    <div className="space-y-8 mb-10">
      {workouts.length === 0 ? (
        <div className="text-center py-8">
          <Dumbbell className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-medium text-foreground mb-2">Nenhum treino criado</h3>
          <p className="text-muted-foreground mb-6">Crie seu primeiro treino para começar</p>
          <button
            onClick={onAddWorkout}
            className="workouts-button inline-flex items-center"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Criar Treino
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-foreground">Meus Treinos</h2>
            <button
              onClick={onAddWorkout}
              className="workouts-button inline-flex items-center"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              Novo Treino
            </button>
          </div>

          {workouts.map((workout) => (
            <div 
              key={workout.id} 
              className={`bg-card rounded-2xl shadow-md overflow-hidden border ${
                selectedWorkoutId === workout.id 
                  ? 'border-smartfit-orange shadow-lg' 
                  : 'border-border'
              }`}
            >
              <div className="workout-header flex justify-between items-center">
                {editingWorkoutId === workout.id ? (
                  <div className="flex-1 flex items-center">
                    <input
                      type="text"
                      value={editedWorkoutName}
                      onChange={(e) => setEditedWorkoutName(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-lg border-0 focus:ring-2 focus:ring-white text-foreground bg-background"
                      autoFocus
                    />
                    <button
                      onClick={() => handleSaveWorkoutName(workout)}
                      className="ml-2 p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-colors"
                    >
                      <Check className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleCancelEditing}
                      className="ml-2 p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <h3 className="text-xl font-bold">{workout.name}</h3>
                )}
                
                <div className="flex space-x-2">
                  {editingWorkoutId !== workout.id && (
                    <button
                      onClick={() => handleEditWorkout(workout)}
                      className="p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-colors"
                      aria-label="Editar nome do treino"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                  )}
                  
                  <button
                    onClick={() => onDeleteWorkout(workout.id)}
                    className="p-2 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30 transition-colors"
                    aria-label="Excluir treino"
                  >
                    <Trash className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <button
                  onClick={() => onSelectWorkout(
                    selectedWorkoutId === workout.id ? null : workout.id
                  )}
                  className={`w-full py-3 px-4 rounded-xl mb-4 text-left font-medium transition-colors ${
                    selectedWorkoutId === workout.id
                      ? 'bg-smartfit-orange text-white'
                      : 'bg-secondary text-foreground hover:bg-muted'
                  }`}
                >
                  {selectedWorkoutId === workout.id
                    ? 'Ocultar exercícios'
                    : `Ver ${workout.exercises.length} exercício${workout.exercises.length !== 1 ? 's' : ''}`}
                </button>
                
                {selectedWorkoutId === workout.id && (
                  <div className="mt-4 space-y-4">
                    {workout.exercises.length === 0 ? (
                      <div className="text-center py-4 text-muted-foreground">
                        Nenhum exercício adicionado a este treino.
                      </div>
                    ) : (
                      workout.exercises.map((exercise, index) => (
                        <ExerciseCard
                          key={exercise.id}
                          exercise={exercise}
                          onDelete={() => handleDeleteExercise(workout, exercise.id)}
                          onEdit={() => {/* Implementar edição de exercício */}}
                          onMoveUp={() => moveExerciseUp(workout, index)}
                          onMoveDown={() => moveExerciseDown(workout, index)}
                          isFirst={index === 0}
                          isLast={index === workout.exercises.length - 1}
                        />
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default WorkoutList;
