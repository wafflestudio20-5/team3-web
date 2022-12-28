import { ChangeEventHandler } from 'react';
import { Input } from './input-normal.styled';

interface InputNormal {
  placeholder: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const InputNormal = ({
  placeholder,
  value,
  handleChange,
}: InputNormal) => {
  return (
    <Input placeholder={placeholder} value={value} onChange={handleChange} />
  );
};

export default InputNormal;
