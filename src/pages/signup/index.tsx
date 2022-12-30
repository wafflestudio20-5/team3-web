import { ChangeEvent, useState } from 'react';
import { COLOR_CARROT } from '../../constant';
import { Postcode } from './components/Postcode';
import { ProfileInputLabel } from './components/ProfileInputLabel';
import SignUpInputNormal, {
  SignUpButtonNormal,
} from './components/SignUpInputNormal';
import {
  H1,
  PostcodeWrapper,
  SignUpButtonWrapper,
  SignUpInputLeft,
  SignUpInputRight,
  Span,
  Wrapper,
} from './signup.styled';

import { useDaumPostcodePopup } from 'react-daum-postcode';

const SignUpPage = () => {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
    email: '',
    location: '',
    img: '',
  });
  const { id, password, passwordConfirm, email, img } = inputs;
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(img);
    console.log(location);
  };
  const [location, setLocation] = useState('');
  const open = useDaumPostcodePopup();
  const handleComplete = (data: any) => {
    const userAddress = data.jibunAddress;

    // if (data.addressType === 'R') {
    //   if (data.sido !== '') {
    //     // e.g. '서울'
    //     userAddress += data.sido;
    //   }
    //   if (data.sigungu !== '') {
    //     // e.g. '관악구'
    //     userAddress += `, ${data.sigungu}`;
    //   }
    //   if (data.bname !== '') {
    //     //e.g. '봉천동'
    //     userAddress += `, ${data.bname}`;
    //   }
    //   if (data.zonecode !== '') {
    //     //e.g. 08833
    //     userAddress += `, ${data.zonecode}`;
    //   }
    // }

    console.log(userAddress); // e.g. '서울 관악구 봉천동(08833)'
    setLocation(userAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
  return (
    <Wrapper>
      <H1>회원가입</H1>
      <SignUpInputNormal
        label="email"
        valueName="email"
        value={email}
        required={true}
        placeholder="이메일을 입력해주세요"
        handleChange={onChange}
        isWithButton={true}
        buttonText="중복 확인"
        handleClick={() => {
          console.log('Button Clicked!');
        }}
      />
      <SignUpInputNormal
        label="password"
        valueName="password"
        value={password}
        type="password"
        required={true}
        placeholder="비밀번호를 입력해주세요"
        handleChange={onChange}
      />
      <SignUpInputNormal
        label="password confirmation"
        valueName="passwordConfirm"
        value={passwordConfirm}
        type="password"
        required={true}
        placeholder="비밀번호를 한 번 더 입력해주세요"
        handleChange={onChange}
      />
      {passwordConfirm !== '' && password === passwordConfirm ? (
        <Span color="blue">비밀번호가 일치합니다</Span>
      ) : (
        <Span color="tomato">비밀번호가 일치하지 않습니다</Span>
      )}

      <SignUpInputNormal
        label="username"
        valueName="id"
        value={id}
        required={true}
        placeholder="사용하고자 하는 유저 이름을 입력해주세요"
        handleChange={onChange}
      />
      {/* <ProfileInputLabel img={img} handleChange={onChange}></ProfileInputLabel> */}

      {/* <SignUpInputNormal // location의 경우 이후 select를 이용하도록 수정
        valueName="location"
        value={location}
        required={false}
        placeholder="사는 지역을 선택해주세요"
        handleChange={onChange}
      /> */}
      {/* <PostcodeWrapper>
        <span>내 동네 설정(선택): 내 동네를 설정하시겠어요?</span>
        <Postcode setLocation={setLocation} />
      </PostcodeWrapper> */}

      <SignUpInputNormal
        label="location"
        valueName="location"
        value={location}
        placeholder="동네 이름을 검색해주세요"
        isWithButton={true}
        buttonText="동네 검색"
        handleClick={handleClick}
      />
      {/* <Postcode setLocation={setLocation} /> */}

      <SignUpButtonWrapper>
        <SignUpButtonNormal
          text="회원가입"
          bgColor={COLOR_CARROT}
          handleClick={() => {
            console.log('회원가입!'); // 이후 서버에 요청하도록 수정
          }}
        />
      </SignUpButtonWrapper>
    </Wrapper>
  );
};

export default SignUpPage;
