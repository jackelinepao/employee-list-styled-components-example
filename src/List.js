import React from "react";
import { useEmployeeContext } from "./employeeContext";
import styled from "styled-components";

const Wrapper = styled.div``;
function List() {
  const { state } = useEmployeeContext();
  return (
    <div>
      <h1>Employee List</h1>
      {state.employees.map((employee) => {
        console.log(employee);
        return (
          <Wrapper key={employee.EmployeeID}>
            <h1>{employee.firstName}</h1>
            <h1>{employee.lastName}</h1>
            <h1>{employee.EmployeeID}</h1>
            <h1>{employee.country}</h1>
            <h1>{employee.state}</h1>
          </Wrapper>
        );
      })}
    </div>
  );
}

export { List };
