import { StyledButton } from "./Button.style";

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>{
    text: string
    width?: number
    height?: number
}
export const Button = ({ text, width, height, ...others}: ButtonProps) => (
    <StyledButton width={width} height={height} {...others}>
        {text}
    </StyledButton>
)