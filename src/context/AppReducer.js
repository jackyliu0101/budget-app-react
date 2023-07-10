export default (state, action) => {
  switch(action.type) {
    case 'ADD_BUDGET':
      return {
        ...state,
        budgets: [...state.budgets, action.payload],
      }
    case 'UPDATE_BUDGET':
      return {
        ...state,
        budgets: state.budgets.map(budget => {
          return (budget.id === action.payload.id) ? {...budget, name: action.payload.name, amount: action.payload.amount} : budget
        })
      }
    default:
      return state;
  }
}
