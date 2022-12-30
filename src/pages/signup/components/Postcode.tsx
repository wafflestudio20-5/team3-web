import { Dispatch, SetStateAction } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { PostcodeButton } from '../signup.styled';

interface PostcodeProps {
  setLocation: Dispatch<SetStateAction<string>>;
  //   setLocation: Dispatch<SetStateAction<string>>;
}

export const Postcode = ({ setLocation }: PostcodeProps) => {
  const open = useDaumPostcodePopup();

  const handleComplete = (data: any) => {
    let userAddress = '';

    if (data.addressType === 'R') {
      if (data.sido !== '') {
        // e.g. '서울'
        userAddress += data.sido;
      }
      if (data.sigungu !== '') {
        // e.g. '관악구'
        userAddress += `, ${data.sigungu}`;
      }
      if (data.bname !== '') {
        //e.g. '봉천동'
        userAddress += `, ${data.bname}`;
      }
      if (data.zonecode !== '') {
        //e.g. 08833
        userAddress += `, ${data.zonecode}`;
      }
    }

    console.log(userAddress); // e.g. '서울 관악구 봉천동(08833)'
    setLocation(userAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <PostcodeButton type="button" onClick={handleClick}>
      나의 동네 찾기
    </PostcodeButton>
  );
};
