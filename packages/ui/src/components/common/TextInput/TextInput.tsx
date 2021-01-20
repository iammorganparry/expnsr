import { StyledTextInput, StyledLabel } from './TextInput.style';

export interface TextInputProps extends React.InputHTMLAttributes<{}> {
  label: string;
}
export const TextInput = ({ label, ...others }: TextInputProps) => (
  <>
    <StyledLabel>{label}</StyledLabel>
    <StyledTextInput {...others} />
  </>
);
