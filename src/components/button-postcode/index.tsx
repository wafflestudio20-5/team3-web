import { Dispatch, SetStateAction } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { PostcodeButton } from './button-postcode.styled';

interface PostcodeProps {
  setLocation: Dispatch<SetStateAction<string>>;
  text: string;
  bgColor?: string;
}

export const Postcode = ({ setLocation, text, bgColor }: PostcodeProps) => {
  const open = useDaumPostcodePopup();

  const handleComplete = (data: any) => {
    // DESC: API 보니 jibunAddress 가 없는 경우 autoJibunAddress로 주소를 설정해놓아, 이에 맞춰 userAddress에 할당
    const userAddress =
      data.jibunAddress === '' ? data.autoJibunAddress : data.jibunAddress;
    setLocation(userAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <PostcodeButton type="button" onClick={handleClick} bgColor={bgColor}>
      {text}
    </PostcodeButton>
  );
};
