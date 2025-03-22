
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Plus, Minus } from 'lucide-react';
import { toast } from 'sonner';

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [timePresets, setTimePresets] = useState([30, 60, 90, 120]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (seconds === 0 && isActive) {
      setIsActive(false);
      setCompleted(true);
      toast.success('Tempo concluído!');
      
      // Play sound
      const audio = new Audio('/timer-end.mp3');
      audio.play().catch(e => console.error('Erro ao reproduzir som:', e));
      
      // Vibrate if supported
      if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200]);
      }
    }
  }, [seconds, isActive]);

  const startTimer = () => {
    if (seconds > 0) {
      setIsActive(true);
      setCompleted(false);
      
      intervalRef.current = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds <= 1) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    } else {
      toast.error('Defina um tempo maior que zero!');
    }
  };

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setIsActive(false);
    }
  };

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsActive(false);
    setSeconds(60);
    setCompleted(false);
  };

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const increaseTime = () => {
    if (!isActive) {
      setSeconds(prev => prev + 15);
      setCompleted(false);
    }
  };

  const decreaseTime = () => {
    if (!isActive && seconds > 15) {
      setSeconds(prev => prev - 15);
      setCompleted(false);
    }
  };

  const setPresetTime = (time: number) => {
    if (!isActive) {
      setSeconds(time);
      setCompleted(false);
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-md p-6 mb-10 max-w-md w-full mx-auto animate-scale-in">
      <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
        Timer de Descanso
      </h2>
      
      <div className={`timer-display mb-6 ${isActive ? 'timer-pulse' : ''} ${completed ? 'bg-smartfit-orange text-white' : ''}`}>
        {formatTime(seconds)}
      </div>
      
      <div className="flex justify-center items-center space-x-4 mb-8">
        <button
          onClick={decreaseTime}
          disabled={isActive || seconds <= 15}
          className={`p-3 rounded-full ${
            isActive || seconds <= 15
              ? 'bg-muted text-muted-foreground cursor-not-allowed'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors'
          }`}
          aria-label="Diminuir tempo"
        >
          <Minus className="h-6 w-6" />
        </button>
        
        {isActive ? (
          <button
            onClick={pauseTimer}
            className="p-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors animated-button"
            aria-label="Pausar"
          >
            <Pause className="h-8 w-8" />
          </button>
        ) : (
          <button
            onClick={startTimer}
            className={`p-4 rounded-full animated-button ${
              completed
                ? 'bg-smartfit-orange text-white hover:bg-smartfit-darkorange'
                : 'bg-smartfit-orange text-white hover:bg-smartfit-darkorange'
            }`}
            aria-label="Iniciar"
          >
            <Play className="h-8 w-8" />
          </button>
        )}
        
        <button
          onClick={increaseTime}
          disabled={isActive}
          className={`p-3 rounded-full ${
            isActive
              ? 'bg-muted text-muted-foreground cursor-not-allowed'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors'
          }`}
          aria-label="Aumentar tempo"
        >
          <Plus className="h-6 w-6" />
        </button>
      </div>
      
      <div className="flex justify-center mb-6">
        <button
          onClick={resetTimer}
          className="flex items-center justify-center px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-colors"
          aria-label="Reiniciar"
        >
          <RotateCcw className="h-5 w-5 mr-2" />
          Reiniciar
        </button>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {timePresets.map(preset => (
          <button
            key={preset}
            onClick={() => setPresetTime(preset)}
            disabled={isActive}
            className={`py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? 'bg-muted text-muted-foreground cursor-not-allowed'
                : seconds === preset
                ? 'bg-smartfit-orange text-white'
                : 'bg-secondary text-foreground hover:bg-secondary/80'
            }`}
          >
            {preset}s
          </button>
        ))}
      </div>
    </div>
  );
};

export default Timer;
