const initialState = {
  inputValue: '',
  result: '',
  history: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_NUMBER':
      return { ...state, inputValue: state.inputValue + action.payload }
    case 'OPERATION':
      return { ...state, inputValue: state.inputValue + action.payload }
    case 'CALCULATE':
      const result = eval(state.inputValue)
      const newHistory = [
        ...state.history,
        { expression: state.inputValue, result }
      ]
      const sortedHistory = newHistory.sort((a, b) => a.result - b.result)
      return {
        ...state,
        inputValue: '',
        result,
        history: sortedHistory
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}
export { initialState, reducer }
