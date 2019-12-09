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
}

export function DashboardContextProvider({ children }) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const value = { state, dispatch };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}