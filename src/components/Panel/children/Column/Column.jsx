import React, { useContext } from 'react';

import { TasksContext } from '../../../../contexts/tasks.context';

// styles
import {
  ColumnContainer,
} from './styles';

function Column({ title, id }) {

  const { state, dispatch } = useContext(TasksContext);

  const payload = {
    id: Date.now(),
    title: 'Olá',
    description: '',
    status: id,
  }

  return (
    <ColumnContainer>
      <h3 onClick={() => dispatch({ type: 'add', payload })}>{title}</h3>

      {state.filter(item => item.status === id).map(item => <p key={item.id}>{item.id}</p>)}
    </ColumnContainer>
  );
}

export default Column;
