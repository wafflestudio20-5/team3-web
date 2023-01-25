import { Button } from './add-button.styled';
import addIcon from '../../assets/add-button.svg';

interface AddButtonProps {
  handleClick: () => void;
}

export const AddButton = ({ handleClick }: AddButtonProps) => {
  return <Button src={addIcon} onClick={handleClick} />;
};
