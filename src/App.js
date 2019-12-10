import React from 'react';
import './App.css';

import { DashboardContextProvider } from './contexts/dashboard.context';

import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <DashboardContextProvider>

      <div className="App">
        <Dashboard />
      </div>

    </DashboardContextProvider>
  );
}

export default App;
