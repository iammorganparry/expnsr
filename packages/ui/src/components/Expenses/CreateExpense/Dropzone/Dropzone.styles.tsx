import styled, { css } from 'styled-components';

export const StyledDropzone = styled.div`
  ${({ theme }) => css`
    width: 400px;
    height: 600px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: ${theme.palette.background.paper};
    justify-content: center;
    border: 5px dashed ${theme.palette.primary.light};
  `}
`;
