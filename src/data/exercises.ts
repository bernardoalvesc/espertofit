
import { Exercise, PreloadedExercises } from '../types';

// Base de exercícios pré-cadastrados
const createExerciseId = (index: number, group: string) => `${group}-${index}`;

// Exercícios para peito
const chestExercises: Exercise[] = [
  {
    id: createExerciseId(1, 'peito'),
    name: 'Supino Reto',
    muscleGroup: 'peito',
    sets: 4,
    reps: 10,
    weight: 'Barra + Anilhas',
    notes: 'Manter cotovelos a 45 graus do corpo'
  },
  {
    id: createExerciseId(2, 'peito'),
    name: 'Supino Inclinado',
    muscleGroup: 'peito',
    sets: 3,
    reps: 12,
    weight: 'Barra + Anilhas'
  },
  {
    id: createExerciseId(3, 'peito'),
    name: 'Crucifixo',
    muscleGroup: 'peito',
    sets: 3,
    reps: 15,
    weight: 'Halteres'
  },
  {
    id: createExerciseId(4, 'peito'),
    name: 'Cross-over',
    muscleGroup: 'peito',
    sets: 3,
    reps: 12,
    weight: 'Cabos'
  },
  {
    id: createExerciseId(5, 'peito'),
    name: 'Flexão de Braço',
    muscleGroup: 'peito',
    sets: 3,
    reps: 15,
    weight: 'Peso Corporal'
  }
];

// Exercícios para costas
const backExercises: Exercise[] = [
  {
    id: createExerciseId(1, 'costas'),
    name: 'Puxada Frontal',
    muscleGroup: 'costas',
    sets: 4,
    reps: 10,
    weight: 'Máquina'
  },
  {
    id: createExerciseId(2, 'costas'),
    name: 'Remada Curvada',
    muscleGroup: 'costas',
    sets: 3,
    reps: 12,
    weight: 'Barra + Anilhas',
    notes: 'Manter coluna neutra, puxar para o abdômen'
  },
  {
    id: createExerciseId(3, 'costas'),
    name: 'Pulldown',
    muscleGroup: 'costas',
    sets: 3,
    reps: 12,
    weight: 'Máquina'
  },
  {
    id: createExerciseId(4, 'costas'),
    name: 'Remada Sentada',
    muscleGroup: 'costas',
    sets: 3,
    reps: 12,
    weight: 'Máquina'
  },
  {
    id: createExerciseId(5, 'costas'),
    name: 'Barra Fixa',
    muscleGroup: 'costas',
    sets: 3,
    reps: 8,
    weight: 'Peso Corporal'
  }
];

// Exercícios para ombros
const shoulderExercises: Exercise[] = [
  {
    id: createExerciseId(1, 'ombro'),
    name: 'Desenvolvimento com Barra',
    muscleGroup: 'ombro',
    sets: 4,
    reps: 10,
    weight: 'Barra + Anilhas'
  },
  {
    id: createExerciseId(2, 'ombro'),
    name: 'Elevação Lateral',
    muscleGroup: 'ombro',
    sets: 3,
    reps: 12,
    weight: 'Halteres',
    notes: 'Subir até a altura dos ombros'
  },
  {
    id: createExerciseId(3, 'ombro'),
    name: 'Elevação Frontal',
    muscleGroup: 'ombro',
    sets: 3,
    reps: 12,
    weight: 'Halteres'
  },
  {
    id: createExerciseId(4, 'ombro'),
    name: 'Desenvolvimento Arnold',
    muscleGroup: 'ombro',
    sets: 3,
    reps: 10,
    weight: 'Halteres'
  },
  {
    id: createExerciseId(5, 'ombro'),
    name: 'Encolhimento de Ombros',
    muscleGroup: 'ombro',
    sets: 3,
    reps: 15,
    weight: 'Halteres'
  }
];

// Exercícios para bíceps
const bicepsExercises: Exercise[] = [
  {
    id: createExerciseId(1, 'biceps'),
    name: 'Rosca Direta',
    muscleGroup: 'biceps',
    sets: 3,
    reps: 12,
    weight: 'Barra + Anilhas'
  },
  {
    id: createExerciseId(2, 'biceps'),
    name: 'Rosca Alternada',
    muscleGroup: 'biceps',
    sets: 3,
    reps: 12,
    weight: 'Halteres',
    notes: 'Fazer rotação do pulso'
  },
  {
    id: createExerciseId(3, 'biceps'),
    name: 'Rosca Concentrada',
    muscleGroup: 'biceps',
    sets: 3,
    reps: 10,
    weight: 'Halteres'
  },
  {
    id: createExerciseId(4, 'biceps'),
    name: 'Rosca Scott',
    muscleGroup: 'biceps',
    sets: 3,
    reps: 10,
    weight: 'Barra EZ'
  },
  {
    id: createExerciseId(5, 'biceps'),
    name: 'Rosca Martelo',
    muscleGroup: 'biceps',
    sets: 3,
    reps: 12,
    weight: 'Halteres'
  }
];

// Exercícios para tríceps
const tricepsExercises: Exercise[] = [
  {
    id: createExerciseId(1, 'triceps'),
    name: 'Tríceps Corda',
    muscleGroup: 'triceps',
    sets: 3,
    reps: 12,
    weight: 'Cabo'
  },
  {
    id: createExerciseId(2, 'triceps'),
    name: 'Tríceps Francês',
    muscleGroup: 'triceps',
    sets: 3,
    reps: 12,
    weight: 'Halteres',
    notes: 'Manter cotovelos junto à cabeça'
  },
  {
    id: createExerciseId(3, 'triceps'),
    name: 'Mergulho no Banco',
    muscleGroup: 'triceps',
    sets: 3,
    reps: 15,
    weight: 'Peso Corporal'
  },
  {
    id: createExerciseId(4, 'triceps'),
    name: 'Tríceps Testa',
    muscleGroup: 'triceps',
    sets: 3,
    reps: 10,
    weight: 'Barra EZ'
  },
  {
    id: createExerciseId(5, 'triceps'),
    name: 'Tríceps Coice',
    muscleGroup: 'triceps',
    sets: 3,
    reps: 12,
    weight: 'Halteres'
  }
];

// Exercícios para pernas
const legExercises: Exercise[] = [
  {
    id: createExerciseId(1, 'perna'),
    name: 'Agachamento Livre',
    muscleGroup: 'perna',
    sets: 4,
    reps: 10,
    weight: 'Barra + Anilhas',
    notes: 'Descer até 90 graus'
  },
  {
    id: createExerciseId(2, 'perna'),
    name: 'Leg Press',
    muscleGroup: 'perna',
    sets: 4,
    reps: 12,
    weight: 'Máquina'
  },
  {
    id: createExerciseId(3, 'perna'),
    name: 'Cadeira Extensora',
    muscleGroup: 'perna',
    sets: 3,
    reps: 15,
    weight: 'Máquina'
  },
  {
    id: createExerciseId(4, 'perna'),
    name: 'Cadeira Flexora',
    muscleGroup: 'perna',
    sets: 3,
    reps: 12,
    weight: 'Máquina'
  },
  {
    id: createExerciseId(5, 'perna'),
    name: 'Panturrilha em Pé',
    muscleGroup: 'perna',
    sets: 4,
    reps: 20,
    weight: 'Máquina'
  },
  {
    id: createExerciseId(6, 'perna'),
    name: 'Avanço',
    muscleGroup: 'perna',
    sets: 3,
    reps: 10,
    weight: 'Halteres',
    notes: 'Por perna'
  }
];

// Exercícios para abdômen
const absExercises: Exercise[] = [
  {
    id: createExerciseId(1, 'abdomen'),
    name: 'Abdominal Tradicional',
    muscleGroup: 'abdomen',
    sets: 3,
    reps: 20,
    weight: 'Peso Corporal'
  },
  {
    id: createExerciseId(2, 'abdomen'),
    name: 'Prancha',
    muscleGroup: 'abdomen',
    sets: 3,
    reps: 30,
    weight: 'Peso Corporal',
    notes: 'Tempo em segundos'
  },
  {
    id: createExerciseId(3, 'abdomen'),
    name: 'Abdominal Infra',
    muscleGroup: 'abdomen',
    sets: 3,
    reps: 15,
    weight: 'Peso Corporal'
  },
  {
    id: createExerciseId(4, 'abdomen'),
    name: 'Russian Twist',
    muscleGroup: 'abdomen',
    sets: 3,
    reps: 20,
    weight: 'Peso Corporal',
    notes: '10 para cada lado'
  },
  {
    id: createExerciseId(5, 'abdomen'),
    name: 'Elevação de Pernas',
    muscleGroup: 'abdomen',
    sets: 3,
    reps: 12,
    weight: 'Peso Corporal'
  }
];

// Exercícios para glúteos
const glutesExercises: Exercise[] = [
  {
    id: createExerciseId(1, 'gluteos'),
    name: 'Agachamento Sumo',
    muscleGroup: 'gluteos',
    sets: 4,
    reps: 12,
    weight: 'Barra + Anilhas'
  },
  {
    id: createExerciseId(2, 'gluteos'),
    name: 'Elevação Pélvica',
    muscleGroup: 'gluteos',
    sets: 3,
    reps: 15,
    weight: 'Barra + Anilhas',
    notes: 'Apoiar as costas no banco'
  },
  {
    id: createExerciseId(3, 'gluteos'),
    name: 'Coice de Glúteos',
    muscleGroup: 'gluteos',
    sets: 3,
    reps: 12,
    weight: 'Cabo',
    notes: 'Por perna'
  },
  {
    id: createExerciseId(4, 'gluteos'),
    name: 'Abdução de Quadril',
    muscleGroup: 'gluteos',
    sets: 3,
    reps: 15,
    weight: 'Máquina'
  },
  {
    id: createExerciseId(5, 'gluteos'),
    name: 'Stiff',
    muscleGroup: 'gluteos',
    sets: 3,
    reps: 12,
    weight: 'Barra + Anilhas'
  }
];

// Exercícios para cardio
const cardioExercises: Exercise[] = [
  {
    id: createExerciseId(1, 'cardio'),
    name: 'Esteira',
    muscleGroup: 'cardio',
    sets: 1,
    reps: 20,
    weight: 'N/A',
    notes: 'Tempo em minutos'
  },
  {
    id: createExerciseId(2, 'cardio'),
    name: 'Bicicleta',
    muscleGroup: 'cardio',
    sets: 1,
    reps: 20,
    weight: 'N/A',
    notes: 'Tempo em minutos'
  },
  {
    id: createExerciseId(3, 'cardio'),
    name: 'Elíptico',
    muscleGroup: 'cardio',
    sets: 1,
    reps: 15,
    weight: 'N/A',
    notes: 'Tempo em minutos'
  },
  {
    id: createExerciseId(4, 'cardio'),
    name: 'Pular Corda',
    muscleGroup: 'cardio',
    sets: 3,
    reps: 2,
    weight: 'N/A',
    notes: 'Tempo em minutos'
  },
  {
    id: createExerciseId(5, 'cardio'),
    name: 'HIIT',
    muscleGroup: 'cardio',
    sets: 5,
    reps: 1,
    weight: 'N/A',
    notes: '30s esforço, 30s descanso'
  }
];

// Treinos pré-cadastrados
export const exerciseDatabase: PreloadedExercises = {
  chest: chestExercises,
  back: backExercises,
  shoulder: shoulderExercises,
  biceps: bicepsExercises,
  triceps: tricepsExercises,
  legs: legExercises,
  abs: absExercises,
  glutes: glutesExercises,
  cardio: cardioExercises,
  
  // Treinos pré-montados
  workout1: [
    chestExercises[0],
    chestExercises[1],
    shoulderExercises[1],
    shoulderExercises[2],
    tricepsExercises[0],
    tricepsExercises[3]
  ],
  workout2: [
    backExercises[0],
    backExercises[1],
    backExercises[4],
    bicepsExercises[0],
    bicepsExercises[4]
  ],
  workout3: [
    legExercises[0],
    legExercises[1],
    glutesExercises[2],
    absExercises[0],
    absExercises[1]
  ]
};
