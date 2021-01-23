import { IconButton } from '@material-ui/core';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

export const StyledForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    padding: ${theme.spacing(3)};
    flex-direction: column;
  `}
`;

export const ItemContainer = styled.ul`
  ${({ theme }) => css`
    display: flex;
    padding-left: 0;
    flex-wrap: wrap;
    width: 100%;
    max-height: 600px;
    overflow-x: hidden;
    overflow-y: scroll;
    justify-content: center;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    padding-right: 190px;
    box-sizing: content-box; /* So the width will be 100% + 17px */
  `}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const animation = css`
  animation: ${fadeIn} 0.75s ease;
  animation-fill-mode: forwards;
`;
export const Item = styled.li`
  ${({ theme }) => css`
    opacity: 0;
    display: flex;
    width: 70%;
    ${animation};
  `}
`;

export const Price = styled.li`
  ${({ theme }) => css`
    opacity: 0;
    display: flex;
    width: 30%;
    justify-content: flex-end;
    ${animation};
  `}
`;

export const AddItemsBtn = styled.button`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.palette.background.paper};
    border: 2px solid ${theme.palette.secondary.main};
    opacity: 0.5;
    width: 150px;
    height: 40px;
    border-radius: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: ${theme.palette.text.primary};
    transition: all 0.35s ease;
    outline: none;
    svg {
      font-size: 18px;
      margin-right: ${theme.spacing(1)};
    }

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  `}
`;

export const FormTotals = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  text-align: right;
  flex-direction: column;
`;
export const StyledTotal = styled.h3`
  ${({ total }: { total: number }) => css`
    @property --num {
      syntax: '<integer>';
      initial-value: 0;
      inherits: false;
    }
    --num: ${total};
    margin: 0;
    font-size: 30px;
    transition: --num 1s;
    counter-reset: num var(--num);
    &::after {
      content: counter(num);
    }
  `}
`;

export const StyledItems = styled.div`
  display: inline-flex;
  width: 100%;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const StyledDecimal = styled(StyledTotal)`
  &::after {
    content: counter(num, decimal-leading-zero);
  }
`;

export const RemovalContainer = styled.div`
  display: flex;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

export const StyledIconButton = styled(IconButton)`
  ${({ theme }) => css`
    &:hover {
      color: ${theme.palette.error.main};
    }
  `}
`;

export const SubmitContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content:center;
`
