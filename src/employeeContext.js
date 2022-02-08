import { useReducer, createContext, useContext } from "react";

const Context = createContext(null);

export function useEmployeeContext() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

function employeesReducer(state, action) {
  switch (action.type) {
    case "add": {
      return { employees: [...state.employees, action.payload] };
    }
    // no default
  }
}

export default function ContextProvider({ children }) {
  const initialState = {
    employees: [],
  };

  const [state, dispatch] = useReducer(employeesReducer, initialState);
  console.log({ state });
  const createEmmployee = (employee) => {
    console.log(employee);
    dispatch({
      type: "add",
      payload: employee,
    });
  };

  const value = {
    state,
    createEmmployee,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
