import { Link } from 'react-router-dom';
import { Button } from './add-button.styled';
import addButton from '../../../../assets/add-button.svg';

const AddButton = () => {
  return (
    <Link to="/login">
      <Button src={addButton} />
    </Link>
  );
};

export default AddButton;
