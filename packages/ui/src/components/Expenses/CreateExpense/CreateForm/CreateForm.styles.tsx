import styled, { css } from 'styled-components'

export const StyledForm = styled.form`${({ theme }) => css`
    display: flex;
    width: 100%;
    padding: ${theme.spacing(3)};
    flex-direction: column;
`}
`

export const ItemContainer = styled.ul`${({theme}) => css`
    display: flex;
    padding-left: 0;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;

`}`

export const Item = styled.li`${({ theme }) => css`
    display: flex;
    width: 70%;
`}`

export const Price = styled.li`
    ${({ theme }) => css`
        display: flex;
        width: 30%;
        justify-content: flex-end;

`}`

export const AddItemsBtn = styled.button`
    ${({ theme }) => css`
        display:flex;
        background: ${theme.palette.background.paper};
        border: 2px solid ${theme.palette.secondary.main};
        opacity: 0.5;
        width: 150px;
        height: 40px;
        border-radius: 20px;
        text-align: center;
        justify-content: center;
        align-items:center;
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
`