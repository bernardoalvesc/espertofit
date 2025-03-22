
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Exercise } from '../types';
import { toast } from 'sonner';

interface ExerciseFormProps {
  onAddExercise: (exercise: Exercise) => void;
}

const muscleGroups = [
  { value: 'peito', label: 'Peito' },
  { value: 'costas', label: 'Costas' },
  { value: 'ombro', label: 'Ombros' },
  { value: 'biceps', label: 'Bíceps' },
  { value: 'triceps', label: 'Tríceps' },
  { value: 'perna', label: 'Pernas' },
  { value: 'abdomen', label: 'Abdômen' },
  { value: 'gluteos', label: 'Glúteos' },
  { value: 'cardio', label: 'Cardio' },
  { value: 'outro', label: 'Outro' }
];

const ExerciseForm = ({ onAddExercise }: ExerciseFormProps) => {
  const [name, setName] = useState('');
  const [muscleGroup, setMuscleGroup] = useState('peito');
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(12);
  const [weight, setWeight] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error('Por favor, insira o nome do exercício');
      return;
    }
    
    const newExercise: Exercise = {
      id: Date.now().toString(),
      name: name.trim(),
      muscleGroup,
      sets,
      reps,
      weight: weight || 'N/A',
      notes: notes || '',
    };
    
    onAddExercise(newExercise);
    
    // Reset form
    setName('');
    setMuscleGroup('peito');
    setSets(3);
    setReps(12);
    setWeight('');
    setNotes('');
    
    toast.success('Exercício adicionado com sucesso!');
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8 animate-scale-in">
      <h2 className="text-xl font-bold mb-4 text-smartfit-black flex items-center">
        <Plus className="w-5 h-5 mr-2 text-smartfit-green" />
        Adicionar Exercício
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome do Exercício
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
              placeholder="Ex: Supino Reto"
            />
          </div>
          
          <div>
            <label htmlFor="muscleGroup" className="block text-sm font-medium text-gray-700 mb-1">
              Grupo Muscular
            </label>
            <select
              id="muscleGroup"
              value={muscleGroup}
              onChange={(e) => setMuscleGroup(e.target.value)}
              className="input-field"
            >
              {muscleGroups.map((group) => (
                <option key={group.value} value={group.value}>
                  {group.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="sets" className="block text-sm font-medium text-gray-700 mb-1">
              Séries
            </label>
            <input
              type="number"
              id="sets"
              min="1"
              max="20"
              value={sets}
              onChange={(e) => setSets(Number(e.target.value))}
              className="input-field"
            />
          </div>
          
          <div>
            <label htmlFor="reps" className="block text-sm font-medium text-gray-700 mb-1">
              Repetições
            </label>
            <input
              type="number"
              id="reps"
              min="1"
              max="100"
              value={reps}
              onChange={(e) => setReps(Number(e.target.value))}
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
              Peso (opcional)
            </label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="input-field"
              placeholder="Ex: 20kg, Peso corporal"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
            Observações (opcional)
          </label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="input-field"
            rows={2}
            placeholder="Ex: Manter cotovelos junto ao corpo, fazer com cadência 2:1:2"
          />
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className="workouts-button"
          >
            Adicionar Exercício
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExerciseForm;
