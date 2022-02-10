import styled from "../styledComponents/styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryColors.gray1};
  padding: ${({ theme }) => theme.spacing.m};
  border-radius: ${({ theme }) => theme.cornerRadius.medium};
  margin: ${({ theme }) => theme.spacing.l};
  box-shadow: ${({ theme }) => theme.elevation.s.boxShadow};
  /* & ~ & {
    background-color: red;
  } */
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primaryColors.purple1}; // <Thing> when hovered
    box-shadow: none;
  }
  /* & > & {
    background-color: pink;
  } */

  && h1 {
    color: gray;
  }
`;

export { Card };
