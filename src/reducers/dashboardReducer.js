export default function dashboardReducer(state, action) {
  const actions = {
    changeBg: {
      ...state,
      bgColor: action.payload,
    },
    default: state,
  }
  
  return { ...actions[action.type] || actions.default };
};