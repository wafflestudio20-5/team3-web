import { ChangeEventHandler } from 'react';
import { COLOR_CARROT } from '../../../constant';
import * as S from '../signup.styled';
import { InputNormal } from './Input';

interface SignUpInputNormal {
  label: string;
  valueName: string;
  value: string;
  color?: string;
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
    <S.SignUpButton onClick={handleClick} bgColor={bgColor} disabled={disabled}>
      {text}
    </S.SignUpButton>
  );
};

const SignUpInputNormal = ({
  label,
  valueName,
  value,
  color = 'black',
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
    <S.SignUpInputWrapper>
      <S.Label>
        {required && '* '}
        {label}
        <S.SignUpInput>
          <S.SignUpInputLeft>
            <S.SignUpInputSpan color="tomato">
              {validationText}
            </S.SignUpInputSpan>
            <InputNormal
              name={valueName}
              placeholder={placeholder}
              type={type}
              required={required}
              value={value}
              color={color}
              isReadOnly={isReadOnly}
              handleChange={handleChange}
            />
          </S.SignUpInputLeft>

          {isWithButton && (
            <S.SignUpInputRight>
              <SignUpButtonNormal
                text={buttonText ? buttonText : ''}
                bgColor={COLOR_CARROT}
                handleClick={handleClick}
              />
            </S.SignUpInputRight>
          )}
        </S.SignUpInput>
      </S.Label>
    </S.SignUpInputWrapper>
  );
};

export default SignUpInputNormal;
