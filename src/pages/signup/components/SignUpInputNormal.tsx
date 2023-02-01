import { ChangeEventHandler } from 'react';
import { COLOR_CARROT } from '../../../constant';

import * as S from '../signup.styled';
import { InputNormal } from './input';
import { getSignupIcon } from '../../../utils/validateUserInfo';

interface SignUpInputNormal {
  label: string;
  valueName: string;
  value: string;
  color?: string;
  type?: string;
  required?: boolean;
  placeholder: string;
  isValid?: boolean;
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
  valueName,
  value,
  color = 'black',
  type = 'text',
  required = false,
  placeholder,
  isValid,
  validationText,
  isWithButton = false,
  isReadOnly = false,
  buttonText,
  handleChange,
  handleClick,
}: SignUpInputNormal) => {
  return (
    <S.SignUpInputWrapper>
      <S.SignUpInput>
        <S.SignUpInputLeft>
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
        <S.InputIcon src={getSignupIcon(valueName)} alt="icon" />
      </S.SignUpInput>
      <S.SignUpInputSpan color={isValid ? '#219ED3' : '#D94D11'}>
        {validationText}
      </S.SignUpInputSpan>
    </S.SignUpInputWrapper>
  );
};

export default SignUpInputNormal;
