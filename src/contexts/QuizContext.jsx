import { createContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {}

function reducer(state, action) {
  switch (action.type) {
    default:
      throw new Error("Unknown action");
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return <QuizContext.Provider value={{}}>{children}</QuizContext.Provider>;
}

function useQuizes() {
  const context = createContext(QuizContext);
  if (!context) {
    throw new Error("useQuizes must be used within a QuizProvider");
  }
  return context;
}

export { QuizProvider, useQuizes };