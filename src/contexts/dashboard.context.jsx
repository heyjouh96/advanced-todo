import React, { createContext, useReducer } from 'react';

import dashboardReducer from '../reducers/dashboardReducer';

export const DashboardContext = createContext();

const initialState = {
  columns: [
    {
      id: 1,
      title: 'To do',
    },
    {
      id: 2,
      title: 'Doing',
    },
    {
      id: 3,
      title: 'Done',
    },
  ],
  bgColor: '#ff3b30',
  lastActivities: [
    {
      id: Date.now(),
      type: 'add',
      taskId: 1576090612437,
    }
  ],
}

export function DashboardContextProvider({ children }) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const value = { state, dispatch };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}