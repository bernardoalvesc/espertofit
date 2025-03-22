
import React from 'react';
import { Exercise } from '../types';
import { Dumbbell, Edit, Trash, ArrowUp, ArrowDown } from 'lucide-react';

interface ExerciseCardProps {
  exercise: Exercise;
  onDelete: (id: string) => void;
  onEdit: (exercise: Exercise) => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

const muscleGroupIcons: Record<string, JSX.Element> = {
  peito: <Dumbbell className="h-5 w-5 text-blue-500" />,
  costas: <Dumbbell className="h-5 w-5 text-red-500" />,
  ombro: <Dumbbell className="h-5 w-5 text-yellow-500" />,
  biceps: <Dumbbell className="h-5 w-5 text-purple-500" />,
  triceps: <Dumbbell className="h-5 w-5 text-indigo-500" />,
  perna: <Dumbbell className="h-5 w-5 text-green-500" />,
  abdomen: <Dumbbell className="h-5 w-5 text-orange-500" />,
  gluteos: <Dumbbell className="h-5 w-5 text-pink-500" />,
  cardio: <Dumbbell className="h-5 w-5 text-red-500" />,
  outro: <Dumbbell className="h-5 w-5 text-gray-500" />
};

const muscleGroupNames: Record<string, string> = {
  peito: 'Peito',
  costas: 'Costas',
  ombro: 'Ombros',
  biceps: 'Bíceps',
  triceps: 'Tríceps',
  perna: 'Pernas',
  abdomen: 'Abdômen',
  gluteos: 'Glúteos',
  cardio: 'Cardio',
  outro: 'Outro'
};

const ExerciseCard = ({ 
  exercise, 
  onDelete, 
  onEdit, 
  onMoveUp, 
  onMoveDown, 
  isFirst = false, 
  isLast = false 
}: ExerciseCardProps) => {
  return (
    <div className="exercise-card mb-4 animate-slide-up">
      <div className="flex items-start justify-between p-4">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            {muscleGroupIcons[exercise.muscleGroup] || muscleGroupIcons.outro}
            <h3 className="text-lg font-semibold ml-2">{exercise.name}</h3>
          </div>
          
          <div className="text-sm text-gray-600 mb-2">
            {muscleGroupNames[exercise.muscleGroup] || 'Outro'}
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="bg-gray-50 px-3 py-2 rounded-lg">
              <p className="text-xs text-gray-500">Séries</p>
              <p className="font-medium">{exercise.sets}</p>
            </div>
            <div className="bg-gray-50 px-3 py-2 rounded-lg">
              <p className="text-xs text-gray-500">Reps</p>
              <p className="font-medium">{exercise.reps}</p>
            </div>
            <div className="bg-gray-50 px-3 py-2 rounded-lg">
              <p className="text-xs text-gray-500">Peso</p>
              <p className="font-medium">{exercise.weight}</p>
            </div>
          </div>
          
          {exercise.notes && (
            <div className="text-sm text-gray-600 mt-2 bg-gray-50 p-2 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Observações:</p>
              <p>{exercise.notes}</p>
            </div>
          )}
        </div>
        
        <div className="flex flex-col items-center space-y-2 ml-4">
          <button
            onClick={() => onEdit(exercise)}
            className="p-2 text-gray-500 hover:text-smartfit-green hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Editar"
          >
            <Edit className="h-5 w-5" />
          </button>
          
          <button
            onClick={() => onDelete(exercise.id)}
            className="p-2 text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Excluir"
          >
            <Trash className="h-5 w-5" />
          </button>
          
          {onMoveUp && (
            <button
              onClick={onMoveUp}
              disabled={isFirst}
              className={`p-2 rounded-full transition-colors ${
                isFirst 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'text-gray-500 hover:text-smartfit-green hover:bg-gray-100'
              }`}
              aria-label="Mover para cima"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          )}
          
          {onMoveDown && (
            <button
              onClick={onMoveDown}
              disabled={isLast}
              className={`p-2 rounded-full transition-colors ${
                isLast 
                  ? 'text-gray-300 cursor-not-allowed' 
                  : 'text-gray-500 hover:text-smartfit-green hover:bg-gray-100'
              }`}
              aria-label="Mover para baixo"
            >
              <ArrowDown className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
