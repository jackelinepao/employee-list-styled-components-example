import React, { useEffect } from "react";
import { useEmployeeContext } from "../EmployeeContext";
import { Card } from "../ui/Card";
import { H1, H3 } from "../ui/Text";
import styled, { css } from "../ui/styledComponents/styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { useChangeDocTitle } from "../hook/useChangeDocTitle";

const StyledCard = styled(Card)`
  ${({ theme, isLast }) =>
    isLast &&
    css`
      margin-bottom: ${theme.spacing.xxl};
      background-color: ${theme.colors.primaryColors.gray3};
    `}
`;

function List() {
  const { employees } = useEmployeeContext();
  const navigate = useNavigate();
  const { setdocumentTitle } = useChangeDocTitle();

  useEffect(() => {
    setdocumentTitle("Employee List");
  }, [setdocumentTitle]);
  return (
    <Card>
      <H1>Employee List</H1>
      <Button as="a" href="http://www.ravn.co">
        Go to website
      </Button>
      {employees.map((employee, i) => {
        return (
          <StyledCard
            key={employee.EmployeeID}
            isLast={i === employees.length - 1}
          >
            <H3>
              {employee.firstName} {employee.lastName}
            </H3>
            {/* Add h4 reusable styled component */}
            <h4>
              {employee.state}, {employee.country}
            </h4>
            {/* Add a reusable bodyText styled component */}
            <p>{employee.EmployeeID}</p>
          </StyledCard>
        );
      })}
      <Button onClick={() => navigate("/add-employee")}>Add employee</Button>
    </Card>
  );
}

// ref: https://styled-components.com/docs/basics

export { List };
