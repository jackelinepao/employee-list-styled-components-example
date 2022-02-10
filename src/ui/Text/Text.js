import styled, { css } from "../styledComponents/styled-components";

//Add function to change text color

export const H3 = styled.h3`
  ${({ theme }) => css`
    ${theme.fonts.montserrat}
    ${theme.typography.semibold.h3}
  `}
`;

export const H2 = styled.h2`
  ${({ theme }) => css`
    ${theme.fonts.montserrat}
    ${theme.typography.semibold.h2}
  `}
`;

export const H1 = styled.h1`
  ${({ theme }) => css`
    ${theme.fonts.montserrat}
    ${theme.typography.semibold.h1}
  `}
`;
