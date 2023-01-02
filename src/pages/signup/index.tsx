import { ChangeEvent, useState } from 'react';
import { COLOR_CARROT } from '../../constant';
import SignUpInputNormal, {
  SignUpButtonNormal,
} from './components/SignUpInputNormal';
import { H1, SignUpButtonWrapper, Wrapper } from './signup.styled';

import { useDaumPostcodePopup } from 'react-daum-postcode';
import {
  authPassword,
  validateEmail,
  validatePassword,
  validateUsername,
} from './validAuthInput';
import { useNavigate } from 'react-router-dom';
import Gnb from '../../components/gnb';

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
  };

  // DESC: 카카오 API를 사용하여 위치 관련 정보를 얻어내기
  const [location, setLocation] = useState('');
  const open = useDaumPostcodePopup();
  const handleComplete = (data: any) => {
    // console.log(data);
    const userAddress =
      data.jibunAddress === '' ? data.autoJibunAddress : data.jibunAddress;
    // console.log(userAddress); //
    setLocation(userAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const navigate = useNavigate();
  return (
    <>
      <Gnb />
      <Wrapper>
        <H1>회원가입</H1>
        <SignUpInputNormal
          label="email"
          valueName="email"
          value={email}
          required={true}
          placeholder="이메일을 입력해주세요"
          validationText={validateEmail(email)}
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
          validationText={validatePassword(password)}
          handleChange={onChange}
        />
        <SignUpInputNormal
          label="password confirmation"
          valueName="passwordConfirm"
          value={passwordConfirm}
          type="password"
          required={true}
          placeholder="비밀번호를 한 번 더 입력해주세요"
          validationText={authPassword(password, passwordConfirm)}
          handleChange={onChange}
        />

        <SignUpInputNormal
          label="username"
          valueName="id"
          value={id}
          required={true}
          placeholder="사용하고자 하는 유저 이름을 입력해주세요"
          validationText={validateUsername(id)}
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
              // TODO: validation 먼저 한 번 해주기
              console.log('회원가입!'); // 이후 서버에 요청하도록 수정
              navigate(`/signup/authEmail/${email}`);
            }}
          />
        </SignUpButtonWrapper>
      </Wrapper>
    </>
  );
};

export default SignUpPage;
