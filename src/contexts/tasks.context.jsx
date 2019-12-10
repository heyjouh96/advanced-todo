import React, { createContext, useReducer } from 'react';

import tasksReducer from '../reducers/tasksReducer';

export const TasksContext = createContext();

const initialState = {
  tasks: [
    {
      id: Date.now() + 1,
      title: 'Criar modal para tasks',
      description: 'Criar modal para criação e update de tasks',
      status: 1,
    },
    {
      id: Date.now() + 2,
      title: 'Criar estrutura de contexts e reducers',
      description: 'Criar estrutura de contexts e reducers neste projeto',
      status: 1,
    },
    {
      id: Date.now() + 3,
      title: 'Fazer estrutura inicial do projeto',
      description: 'Fazer estrutura inicial do projeto',
      status: 2,
    },
    {
      id: Date.now() + 4,
      title: 'Publicar no Github',
      description: 'Publicar no Github heyjouh96',
      status: 3,
    }
  ],
  editingTask: null, 
}

export function TasksContextProvider({ children }) {
  const [state, dispatch] = useReducer(tasksReducer, initialState);
  const value = { state, dispatch };

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}