
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExerciseForm from '../components/ExerciseForm';
import WorkoutList from '../components/WorkoutList';
import ExerciseEditModal from '../components/ExerciseEditModal';
import { Exercise, Workout } from '../types';
import { Plus, FileText, ListChecks, TimerOff } from 'lucide-react';
import { exerciseDatabase } from '../data/exercises';
import { toast } from 'sonner';
import Timer from '../components/Timer';
import ThemeToggle from '../components/ThemeToggle';

const Index = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [selectedWorkoutId, setSelectedWorkoutId] = useState<string | null>(null);
  const [editingExercise, setEditingExercise] = useState<Exercise | null>(null);
  const [showExerciseForm, setShowExerciseForm] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  // Load workouts from localStorage on initial render
  useEffect(() => {
    const savedWorkouts = localStorage.getItem('espertofit-workouts');
    if (savedWorkouts) {
      try {
        setWorkouts(JSON.parse(savedWorkouts));
      } catch (error) {
        console.error('Error parsing workouts:', error);
      }
    } else {
      // Create default workouts if none exist
      const defaultWorkouts: Workout[] = [
        {
          id: '1',
          name: 'Treino A - Peito, Ombro e Tríceps',
          exercises: exerciseDatabase.workout1
        },
        {
          id: '2',
          name: 'Treino B - Costas e Bíceps',
          exercises: exerciseDatabase.workout2
        },
        {
          id: '3',
          name: 'Treino C - Pernas e Abdômen',
          exercises: exerciseDatabase.workout3
        }
      ];
      
      setWorkouts(defaultWorkouts);
      localStorage.setItem('espertofit-workouts', JSON.stringify(defaultWorkouts));
    }
  }, []);

  // Save workouts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('espertofit-workouts', JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = () => {
    const newWorkout: Workout = {
      id: Date.now().toString(),
      name: `Treino ${workouts.length + 1}`,
      exercises: []
    };
    
    setWorkouts([...workouts, newWorkout]);
    setSelectedWorkoutId(newWorkout.id);
    toast.success('Novo treino criado!');
  };

  const deleteWorkout = (workoutId: string) => {
    setWorkouts(workouts.filter(workout => workout.id !== workoutId));
    
    if (selectedWorkoutId === workoutId) {
      setSelectedWorkoutId(null);
    }
    
    toast.success('Treino excluído!');
  };

  const updateWorkout = (updatedWorkout: Workout) => {
    setWorkouts(
      workouts.map(workout => 
        workout.id === updatedWorkout.id ? updatedWorkout : workout
      )
    );
  };

  const addExerciseToWorkout = (exercise: Exercise) => {
    if (!selectedWorkoutId) {
      toast.error('Selecione um treino primeiro!');
      return;
    }
    
    const updatedWorkouts = workouts.map(workout => {
      if (workout.id === selectedWorkoutId) {
        return {
          ...workout,
          exercises: [...workout.exercises, exercise]
        };
      }
      return workout;
    });
    
    setWorkouts(updatedWorkouts);
  };

  const handleEditExercise = (exercise: Exercise) => {
    setEditingExercise(exercise);
  };

  const saveEditedExercise = (updatedExercise: Exercise) => {
    const updatedWorkouts = workouts.map(workout => {
      if (workout.id === selectedWorkoutId) {
        return {
          ...workout,
          exercises: workout.exercises.map(exercise => 
            exercise.id === updatedExercise.id ? updatedExercise : exercise
          )
        };
      }
      return workout;
    });
    
    setWorkouts(updatedWorkouts);
    setEditingExercise(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Esperto<span className="text-smartfit-orange">Fit</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Crie e gerencie seus treinos de maneira simples e eficiente
            </p>
          </div>
          
          <div className="mb-8">
            <WorkoutList
              workouts={workouts}
              onAddWorkout={addWorkout}
              onDeleteWorkout={deleteWorkout}
              onUpdateWorkout={updateWorkout}
              onSelectWorkout={setSelectedWorkoutId}
              selectedWorkoutId={selectedWorkoutId}
            />
          </div>
          
          {!showTimer && (
            <div className="flex justify-center mb-8">
              <button 
                onClick={() => setShowTimer(true)}
                className="flex items-center gap-2 px-4 py-2 text-white bg-smartfit-orange rounded-lg shadow hover:bg-smartfit-darkorange transition-colors"
              >
                <TimerOff className="h-5 w-5" />
                <span>Mostrar Timer de Descanso</span>
              </button>
            </div>
          )}
          
          {showTimer && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-foreground">Timer de Descanso</h2>
                <button
                  onClick={() => setShowTimer(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Ocultar
                </button>
              </div>
              <Timer />
            </div>
          )}
          
          {selectedWorkoutId && (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {workouts.find(w => w.id === selectedWorkoutId)?.name}
                </h2>
                <button
                  onClick={() => setShowExerciseForm(!showExerciseForm)}
                  className="flex items-center gap-2 px-4 py-2 text-foreground bg-card rounded-lg shadow hover:bg-secondary transition-colors"
                >
                  {showExerciseForm ? (
                    <>
                      <ListChecks className="h-5 w-5" />
                      <span>Ver exercícios</span>
                    </>
                  ) : (
                    <>
                      <Plus className="h-5 w-5" />
                      <span>Adicionar exercício</span>
                    </>
                  )}
                </button>
              </div>
              
              {showExerciseForm ? (
                <ExerciseForm onAddExercise={addExerciseToWorkout} />
              ) : (
                <div className="bg-card rounded-2xl shadow-md p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-smartfit-orange" />
                    Exercícios do Treino
                  </h3>
                  
                  {selectedWorkoutId && workouts.find(w => w.id === selectedWorkoutId)?.exercises.length === 0 ? (
                    <div className="text-center py-6 text-muted-foreground">
                      <p>Nenhum exercício adicionado a este treino.</p>
                      <button
                        onClick={() => setShowExerciseForm(true)}
                        className="mt-4 inline-flex items-center px-4 py-2 text-smartfit-orange hover:underline"
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Adicionar exercício
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {selectedWorkoutId && workouts.find(w => w.id === selectedWorkoutId)?.exercises.map((exercise, index) => (
                        <div 
                          key={exercise.id}
                          className="p-4 border border-border rounded-xl hover:shadow-md transition-shadow animate-fade-in"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-lg text-foreground">{exercise.name}</h4>
                              <p className="text-muted-foreground text-sm mb-2">
                                {exercise.sets} séries x {exercise.reps} repetições
                                {exercise.weight !== 'N/A' ? ` • ${exercise.weight}` : ''}
                              </p>
                              {exercise.notes && (
                                <p className="text-sm text-muted-foreground mt-1 italic">
                                  {exercise.notes}
                                </p>
                              )}
                            </div>
                            <button
                              onClick={() => handleEditExercise(exercise)}
                              className="text-muted-foreground hover:text-smartfit-orange p-1"
                            >
                              Editar
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
          
          {editingExercise && (
            <ExerciseEditModal
              exercise={editingExercise}
              onClose={() => setEditingExercise(null)}
              onSave={saveEditedExercise}
            />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
