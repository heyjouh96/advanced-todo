import React, { useState, useContext, useEffect } from 'react';

import { TasksContext } from '../../../../contexts/tasks.context';

// styles
import {
  ModalContainer,
  ModalOverlay,
} from './styles';

function Modal({ propagateClose }) {

  const { state, dispatch } = useContext(TasksContext);

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 1,
    id: null,
  });

  useEffect(() => {
    if (state.editingTask !== null) {
      setEditing(true);
      setForm(state.editingTask);
    }

    return () => dispatch({ type: 'edit', payload: null });
  }, []);

  const formHandler = (key, value) => setForm({ ...form, [key]: value });

  const apply = () => {
    const payload = { ...form,};
    const type = editing ? 'update' : 'add'; 

    dispatch({ type, payload });
    propagateClose();
  }

  return (
    <>
      <ModalContainer>
        <input type="text" name="title" value={form.title} onChange={e => formHandler(e.target.name, e.target.value)} /> <br />
        <textarea name="description" value={form.description} onChange={e => formHandler(e.target.name, e.target.value)}></textarea> <br />
        <button onClick={() => apply()}>Confirmar</button>
      </ModalContainer>

      <ModalOverlay />
    </>
  );
}

export default Modal;
