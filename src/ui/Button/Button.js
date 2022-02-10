import styled from "../styledComponents/styled-components";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryColors.purple1};
  padding: ${({ theme }) => theme.spacing.s};
  border-radius: ${({ theme }) => theme.cornerRadius.medium};
  border: none;
`;

export { Button };
