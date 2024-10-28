import React, { useEffect } from 'react';
import './App.css';
import { login } from './auth';
import PodsList from './components/PodsList';

const App: React.FC = () => {
  useEffect(() => {
    login();
  }, []);

  return (
    <div className="App">
      <PodsList />
    </div>
  );
};

export default App;

