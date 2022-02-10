import { useReducer, createContext, useContext } from "react";

const Context = createContext(null);

export function useEmployeeContext() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useEmployeeContext must be used within a ContextProvider");
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
    employees: [
      {
        firstName: "Michael",
        lastName: "Scott",
        EmployeeID: "1",
        country: "USA",
        state: "California",
      },
      {
        firstName: "Pam",
        lastName: "Beesly",
        EmployeeID: "2",
        country: "USA",
        state: "Pensylvania",
      },
      {
        firstName: "Dwight",
        lastName: "Schrute",
        EmployeeID: "3",
        country: "USA",
        state: "Pensylvania",
      },
      {
        firstName: "Jim",
        lastName: "Halpert",
        EmployeeID: "4",
        country: "USA",
        state: "Pensylvania",
      },
    ],
  };

  const [state, dispatch] = useReducer(employeesReducer, initialState);
  const createEmmployee = (employee) => {
    console.log(employee);
    dispatch({
      type: "add",
      payload: employee,
    });
  };

  const value = {
    ...state,
    createEmmployee,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
