import { InputHTMLAttributes, memo } from 'react';
import {
  StyledTextInput,
  StyledLabel,
  StyledInputContainer,
  IconContainer,
} from './TextInput.style';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  StartIcon?: React.ElementType;
  width?: string;
}

export const TextInput = memo(
  ({ label, StartIcon, width = '100%', ...others }: TextInputProps) => {
    return (
      <StyledInputContainer width={width}>
        <StyledLabel>{label}</StyledLabel>
        <IconContainer>{StartIcon && <StartIcon />}</IconContainer>
        <StyledTextInput startPadding={!!StartIcon} {...others} />
      </StyledInputContainer>
    );
  },
);
