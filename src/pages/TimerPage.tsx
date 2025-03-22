
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Timer from '../components/Timer';
import ThemeToggle from '../components/ThemeToggle';
import { TimerOff, Clock, AlarmCheck } from 'lucide-react';

const TimerPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-smartfit-orange text-white p-3 rounded-full">
                <TimerOff className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Timer de Descanso
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Controle o tempo de descanso entre suas séries
            </p>
          </div>
          
          <Timer />
          
          <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-foreground flex items-center">
              <AlarmCheck className="w-5 h-5 mr-2 text-smartfit-orange" />
              Dicas de Descanso
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-smartfit-orange rounded-full p-2 text-white mr-3 mt-1">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Hipertrofia (30-90s)</h3>
                  <p className="text-muted-foreground text-sm">
                    Para ganho de massa muscular, descansos de 30 a 90 segundos entre séries são ideais.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-smartfit-orange rounded-full p-2 text-white mr-3 mt-1">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Força (2-5 min)</h3>
                  <p className="text-muted-foreground text-sm">
                    Para ganho de força, utilize descansos mais longos, de 2 a 5 minutos entre séries pesadas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-smartfit-orange rounded-full p-2 text-white mr-3 mt-1">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Resistência (20-30s)</h3>
                  <p className="text-muted-foreground text-sm">
                    Para resistência muscular, descansos curtos de 20 a 30 segundos são recomendados.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-smartfit-orange rounded-full p-2 text-white mr-3 mt-1">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Circuito (15-30s)</h3>
                  <p className="text-muted-foreground text-sm">
                    Para treinos em circuito, utilize descansos de 15 a 30 segundos entre exercícios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TimerPage;
