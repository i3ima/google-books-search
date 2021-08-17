import React from 'react';
import SearchForm from "./features/SearchForm";

const App: React.FC = () => {
  return (
    <div className="text-center container mx-auto">
      <header className="space-y-4 h-screen flex flex-col flex-col items-center justify-center text-white">
       <SearchForm />
      </header>
    </div>
  );
};

export default App;
