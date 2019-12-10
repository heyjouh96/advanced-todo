export default function tasksReducer(state, action) {
  const actions = {
    add: () => ({
      ...state,
      tasks: [
        { ...action.payload, id: Date.now() },
        ...state.tasks,
      ]
    }),
    update: () => ({
      ...state,
      tasks: state.tasks.map(task => {
        let newTask = { ...task };
        if (newTask.id === action.payload.id) newTask = action.payload;
        return newTask;
      }),
    }),
    // delete: {
    //   ...state,
    //   tasks: [
    //     ...state.tasks.filter(task => task.id !== action.payload.id),
    //   ],
    // },
    edit: () => ({
      ...state,
      editingTask: action.payload,
    }),
    default: () => state,
  }
  
  return { ...actions[action.type]() || actions.default };
};