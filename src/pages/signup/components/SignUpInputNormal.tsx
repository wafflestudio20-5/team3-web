import { ChangeEventHandler } from 'react';
import { COLOR_CARROT } from '../../../constant';
import {
  Label,
  Input,
  SignUpButton,
  SignUpInput,
  SignUpInputLeft,
  SignUpInputRight,
  SignUpInputSpan,
  SignUpInputWrapper,
} from '../signup.styled';

interface SignUpInputNormal {
  label: string;
  valueName: string;
  value: string;
  type?: string;
  required?: boolean;
  placeholder: string;
  validationText?: string;
  isWithButton?: boolean;
  isReadOnly?: boolean;
  buttonText?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  handleClick?: () => void;
}

interface SignUpButtonNormal {
  text: string;
  bgColor?: string;
  disabled?: boolean;
  handleClick?: () => void;
}

export const SignUpButtonNormal = ({
  text,
  bgColor,
  disabled = false,
  handleClick,
}: SignUpButtonNormal) => {
  return (
    <SignUpButton onClick={handleClick} bgColor={bgColor} disabled={disabled}>
      {text}
    </SignUpButton>
  );
};

const SignUpInputNormal = ({
  label,
  valueName,
  value,
  type = 'text',
  required = false,
  placeholder,
  validationText,
  isWithButton = false,
  isReadOnly = false,
  buttonText,
  handleChange,
  handleClick,
}: SignUpInputNormal) => {
  return (
    <SignUpInputWrapper>
      <Label>
        {required && '* '}
        {label}
        <SignUpInput>
          <SignUpInputLeft>
            <SignUpInputSpan color="tomato">{validationText}</SignUpInputSpan>
            <Input
              name={valueName}
              placeholder={placeholder}
              type={type}
              required={required}
              value={value}
              readOnly={isReadOnly}
              onChange={handleChange}
            />
          </SignUpInputLeft>

          {isWithButton && (
            <SignUpInputRight>
              <SignUpButtonNormal
                text={buttonText ? buttonText : ''}
                bgColor={COLOR_CARROT}
                handleClick={handleClick}
              />
            </SignUpInputRight>
          )}
        </SignUpInput>
      </Label>
    </SignUpInputWrapper>
  );
};

export default SignUpInputNormal;
