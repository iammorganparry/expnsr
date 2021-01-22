import {
  StyledTextInput,
  StyledLabel,
  StyledInputContainer,
  IconContainer,
} from './TextInput.style';

export interface TextInputProps extends React.InputHTMLAttributes<{}> {
  label: string;
  StartIcon?: React.ElementType;
  width?: string;
}
export const TextInput = ({
  label,
  StartIcon,
  width = '100%',
  ...others
}: TextInputProps) => (
  <StyledInputContainer width={width}>
    <StyledLabel>{label}</StyledLabel>
    <IconContainer>{StartIcon && <StartIcon />}</IconContainer>
    <StyledTextInput startPadding={!!StartIcon} {...others} />
  </StyledInputContainer>
);
