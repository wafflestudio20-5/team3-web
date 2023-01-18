import * as S from './score.styled';
import bad from '../../../../assets/bad.jpeg';
import badGray from '../../../../assets/bad-gray.jpeg';
import goodGray from '../../../../assets/good-gray.jpeg';
import great from '../../../../assets/great.jpeg';
import greatGray from '../../../../assets/great-gray.jpeg';

interface Score {
  emotion: string;
  isSelected: boolean;
  onClick: () => void;
}

const Score = ({ emotion, isSelected, onClick }: Score) => {
  return (
    <S.Div>
      {!isSelected && (
        <S.Img
          src={
            emotion === 'bad'
              ? badGray
              : emotion === 'good'
              ? goodGray
              : greatGray
          }
          onClick={onClick}
        />
      )}
      {isSelected && (
        <S.Img
          src={emotion === 'bad' ? bad : emotion === 'good' ? great : great}
          onClick={onClick}
        />
      )}
      <S.Text>
        {emotion === 'bad'
          ? '별로예요'
          : emotion === 'good'
          ? '좋아요!'
          : '최고예요!'}
      </S.Text>
    </S.Div>
  );
};

export default Score;
