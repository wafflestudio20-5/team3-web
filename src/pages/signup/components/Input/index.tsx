import { ChangeEventHandler } from 'react';
import { Input } from './input.styled';

interface InputNormal {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  value: string;
  color?: string;
  isReadOnly?: boolean;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
}

export const InputNormal = ({
  name,
  placeholder,
  type = 'text',
  required = false,
  value,
  color,
  isReadOnly = false,
  handleChange,
}: InputNormal) => {
  return (
    <Input
      name={name}
      placeholder={placeholder}
      type={type}
      required={required}
      value={value}
      color={color}
      readOnly={isReadOnly}
      onChange={handleChange}
    />
  );
};
