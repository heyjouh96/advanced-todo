export default function tasksReducer(state, action) {
  const actions = {
    add: [
      ...state,
      {
        id: Date.now(),
        title: '',
        description: '',
        status: 1,
      }
    ],
    default: state,
  }
  
  return [ ...actions[action.type] || actions.default ];
};