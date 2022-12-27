import { ChangeEventHandler } from 'react';
import { COLOR_CARROT } from '../../constant';
import ButtonNormal from '../button-normal/index';
import { Input } from '../input-normal/input-normal.styled';
import {
  SignUpButton,
  SignUpInput,
  SignUpInputLeft,
  SignUpInputRight,
  SignUpInputWrapper,
} from './sign-up-input-normal.styled';

interface SignUpInputNormal {
  label: string;
  valueName: string;
  value: string;
  type?: string;
  required?: boolean;
  placeholder: string;
  isWithButton?: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleClick?: () => void;
}

interface SignUpButtonNormal {
  text: string;
  bgColor?: string;
  handleClick?: () => void;
}

export const SignUpButtonNormal: React.FC<SignUpButtonNormal> = ({
  text,
  bgColor,
  handleClick,
}: SignUpButtonNormal) => {
  return (
    <SignUpButton onClick={handleClick} bgColor={bgColor}>
      {text}
    </SignUpButton>
  );
};

const SignUpInputNormal: React.FC<SignUpInputNormal> = ({
  label,
  valueName,
  value,
  type = 'text',
  required = false,
  placeholder,
  isWithButton = false,
  handleChange,
  handleClick,
}: SignUpInputNormal) => {
  return (
    <SignUpInputWrapper>
      {required && '* '}
      <label>
        {label}
        <SignUpInput>
          <SignUpInputLeft>
            <Input
              name={valueName}
              placeholder={placeholder}
              type={type}
              required={required}
              value={value}
              onChange={handleChange}
            />
          </SignUpInputLeft>

          {isWithButton && (
            <SignUpInputRight>
              <SignUpButtonNormal
                text="중복확인"
                bgColor={COLOR_CARROT}
                handleClick={handleClick}
              />
            </SignUpInputRight>
          )}
        </SignUpInput>
      </label>
    </SignUpInputWrapper>
  );
};

export default SignUpInputNormal;
