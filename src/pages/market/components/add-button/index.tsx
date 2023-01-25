import { Button } from './add-button.styled';
import addButton from '../../../../assets/add-button.svg';

const AddButton = ({ handleClick }: { handleClick: () => void }) => {
  return <Button src={addButton} onClick={handleClick} />;
};

export default AddButton;
