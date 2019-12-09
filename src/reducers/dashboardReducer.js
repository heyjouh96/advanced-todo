export default function dashboardReducer(state, action) {
  const actions = {
    add: state,
    default: state,
  }
  
  return [ ...actions[action.type] || actions.default ];
};