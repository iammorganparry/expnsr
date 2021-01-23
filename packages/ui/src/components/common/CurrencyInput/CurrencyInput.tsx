import { ComponentProps, memo } from 'react';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { TextInput } from '../TextInput';
import {
  IconContainer,
  StyledLabel,
  StyledTextInput,
  StyledInputContainer,
} from '../TextInput/TextInput.style';

const defaultMaskOptions = {
  prefix: '£',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
};

const regex = /\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})/g;

interface CurrencyInputProps extends ComponentProps<typeof TextInput> {
  maskOptions?: typeof defaultMaskOptions;
}

export const CurrencyInput = memo(
  ({
    maskOptions,
    width,
    label,
    StartIcon,
    onChange,
    ...inputProps
  }: CurrencyInputProps) => {
    const currencyMask = createNumberMask({
      ...defaultMaskOptions,
      ...maskOptions,
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange({
        ...event,
        target: {
          ...event.target,
          value: event.target.value.substring(1),
        },
      });
    };
    return (
      <StyledInputContainer width={width}>
        <StyledLabel>{label}</StyledLabel>
        <IconContainer>{StartIcon && <StartIcon />}</IconContainer>
        <MaskedInput
          mask={currencyMask}
          {...inputProps}
          onChange={handleChange}
          render={(ref, props) => (
            <StyledTextInput ref={ref} startPadding={!!StartIcon} {...props} />
          )}
        />
      </StyledInputContainer>
    );
  },
);
