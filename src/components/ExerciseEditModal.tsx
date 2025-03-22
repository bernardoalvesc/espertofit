
import React, { useState, useEffect } from 'react';
import { Exercise } from '../types';
import { X } from 'lucide-react';
import { toast } from 'sonner';

interface ExerciseEditModalProps {
  exercise: Exercise | null;
  onClose: () => void;
  onSave: (exercise: Exercise) => void;
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

const ExerciseEditModal = ({ exercise, onClose, onSave }: ExerciseEditModalProps) => {
  const [name, setName] = useState('');
  const [muscleGroup, setMuscleGroup] = useState('');
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(12);
  const [weight, setWeight] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (exercise) {
      setName(exercise.name);
      setMuscleGroup(exercise.muscleGroup);
      setSets(exercise.sets);
      setReps(exercise.reps);
      setWeight(exercise.weight);
      setNotes(exercise.notes || '');
    }
  }, [exercise]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error('Por favor, insira o nome do exercício');
      return;
    }
    
    if (!exercise) return;
    
    onSave({
      ...exercise,
      name: name.trim(),
      muscleGroup,
      sets,
      reps,
      weight: weight || 'N/A',
      notes: notes || '',
    });
    
    toast.success('Exercício atualizado com sucesso!');
  };

  if (!exercise) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
      <div 
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold text-smartfit-black">Editar Exercício</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="edit-name" className="block text-sm font-medium text-gray-700 mb-1">
              Nome do Exercício
            </label>
            <input
              type="text"
              id="edit-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
          </div>
          
          <div>
            <label htmlFor="edit-muscleGroup" className="block text-sm font-medium text-gray-700 mb-1">
              Grupo Muscular
            </label>
            <select
              id="edit-muscleGroup"
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
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="edit-sets" className="block text-sm font-medium text-gray-700 mb-1">
                Séries
              </label>
              <input
                type="number"
                id="edit-sets"
                min="1"
                max="20"
                value={sets}
                onChange={(e) => setSets(Number(e.target.value))}
                className="input-field"
              />
            </div>
            
            <div>
              <label htmlFor="edit-reps" className="block text-sm font-medium text-gray-700 mb-1">
                Repetições
              </label>
              <input
                type="number"
                id="edit-reps"
                min="1"
                max="100"
                value={reps}
                onChange={(e) => setReps(Number(e.target.value))}
                className="input-field"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="edit-weight" className="block text-sm font-medium text-gray-700 mb-1">
              Peso (opcional)
            </label>
            <input
              type="text"
              id="edit-weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="input-field"
              placeholder="Ex: 20kg, Peso corporal"
            />
          </div>
          
          <div>
            <label htmlFor="edit-notes" className="block text-sm font-medium text-gray-700 mb-1">
              Observações (opcional)
            </label>
            <textarea
              id="edit-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="input-field"
              rows={2}
              placeholder="Ex: Manter cotovelos junto ao corpo"
            />
          </div>
          
          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="workouts-button"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExerciseEditModal;
