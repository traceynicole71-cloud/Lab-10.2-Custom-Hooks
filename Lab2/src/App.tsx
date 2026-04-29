import { useState } from 'react';
import PaginationDemo from './components/PaginationDemo';
import DebounceSearchDemo from './components/DebounceSearchDemo';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-stone-900 py-12 px-4 flex flex-col items-center gap-10">
      <PaginationDemo />
      <DebounceSearchDemo />
    </div>
  );
}

export default App;
