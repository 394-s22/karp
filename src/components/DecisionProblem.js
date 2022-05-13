const DecisionProblem = ({ output, setOutput }) => {
    
    const [decisionProblemInput, setDecisionProblemInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
          Name: "",
          Instance: "",
          Arity: "",
          Certificate: "",
        }
}
        
   


