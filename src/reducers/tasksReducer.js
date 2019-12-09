export default function tasksReducer(state, action) {
  const actions = {
    add: [
      ...state,
      action.payload,
    ],
    filter: [
      ...state.filter(item => item.status === action.payload)
    ],
    default: state,
  }
  
  return [ ...actions[action.type] || actions.default ];
};