export default (state, action) => {
  switch(action.type) {
    case 'ADD_BUDGET':
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
      }
    default:
      return state;
  }
}
