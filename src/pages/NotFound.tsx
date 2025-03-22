
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Home, AlertCircle } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="flex justify-end mb-4">
            <ThemeToggle />
          </div>
          
          <div className="mb-6 flex justify-center">
            <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full">
              <AlertCircle className="h-16 w-16 text-red-500" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
          <p className="text-xl mb-8 text-muted-foreground">Oops! Página não encontrada</p>
          
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-smartfit-orange text-white rounded-xl font-medium
              hover:bg-smartfit-darkorange transition-colors duration-300"
          >
            <Home className="mr-2 h-5 w-5" />
            Voltar ao início
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
