import { ChangeEvent, useState } from 'react';
import { COLOR_CARROT } from '../../constant';
import SignUpInputNormal, {
  SignUpButtonNormal,
} from './components/SignUpInputNormal';
import { H1, SignUpButtonWrapper, Wrapper } from './signup.styled';

import { useDaumPostcodePopup } from 'react-daum-postcode';
import * as V from '../../utils/validateUserInfo';
import { useNavigate } from 'react-router-dom';
import Gnb from '../../components/gnb';
import axios from 'axios';
import { randomPassword } from '../../utils/randomPassword';

const SignUpPage = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
    location: '',
  });
  const { email, password, passwordConfirm, username } = inputs;
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [isEmailUnique, setIsEmailUnique] = useState(false);
  const [isUsernameUnique, setIsUsernameUnique] = useState(false);

  const checkEmail = (email: string) => {
    axios
      .get(
        process.env.NODE_ENV === 'development'
          ? '/auth/checkEmail'
          : 'http://3.35.168.70/auth/checkEmail',
        { params: { email: email } },
      )
      .then(res => {
        console.log(res);
        if (res.data) {
          // console.log('중복 없음 블록 실행');
          alert('사용가능한 이메일입니다.');
          setIsEmailUnique(true);
        } else {
          alert('이미 동일한 이메일이 있습니다.');
        }
      });
  };

  const checkUsername = (username: string) => {
    axios
      .get(
        process.env.NODE_ENV === 'development'
          ? '/auth/checkUsername'
          : 'http://3.35.168.70/auth/checkUsername',
        { params: { username: username } },
      )
      .then(res => {
        // console.log(res);
        if (res.data) {
          alert('사용가능한 닉네임입니다.');
          setIsUsernameUnique(true);
        } else {
          alert('이미 동일한 닉네임이 있습니다.');
        }
      });
  };

  const postUser = (
    email: string,
    password: string,
    username: string,
    location?: string,
  ) => {
    axios
      .post(
        process.env.NODE_ENV === 'development'
          ? '/auth/signup'
          : 'http://3.35.168.70/auth/signup',
        {
          email: email,
          password: password,
          username: username,
          location: location,
        },
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
        <button
          onClick={() => {
            console.log(randomPassword());
          }}
        >
          난수 생성
        </button>
        <H1>회원가입</H1>
        <SignUpInputNormal
          label="email"
          valueName="email"
          value={email}
          required={true}
          placeholder="이메일을 입력해주세요"
          validationText={V.valEmailToMsg(email)}
          handleChange={onChange}
          isWithButton={true}
          buttonText="중복 확인"
          handleClick={() => {
            checkEmail(email);
          }}
        />
        <SignUpInputNormal
          label="password"
          valueName="password"
          value={password}
          type="password"
          required={true}
          placeholder="비밀번호를 입력해주세요"
          validationText={V.valPasswordToMsg(password)}
          handleChange={onChange}
        />
        <SignUpInputNormal
          label="password confirmation"
          valueName="passwordConfirm"
          value={passwordConfirm}
          type="password"
          required={true}
          placeholder="비밀번호를 한 번 더 입력해주세요"
          validationText={V.confirmPasswordToMsg(password, passwordConfirm)}
          handleChange={onChange}
        />
        <SignUpInputNormal
          label="username"
          valueName="username"
          value={username}
          required={true}
          placeholder="사용하고자 하는 유저 이름을 입력해주세요"
          validationText={V.valUsernameToMsg(username)}
          handleChange={onChange}
          isWithButton={true}
          buttonText="중복 확인"
          handleClick={() => {
            checkUsername(username);
          }}
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
          isReadOnly={true}
          isWithButton={true}
          buttonText="동네 검색"
          handleClick={handleClick}
        />
        {/* <Postcode setLocation={setLocation} /> */}
        <SignUpButtonWrapper>
          <SignUpButtonNormal
            text="회원가입"
            bgColor={COLOR_CARROT}
            disabled={
              !V.validAllInputs(email, password, passwordConfirm, username)
            }
            handleClick={() => {
              if (isEmailUnique && isUsernameUnique) {
                postUser(email, password, username, location);
                navigate(`/signup/authEmail/${email}`);
              } else {
                alert('이메일과 닉네임 중복 여부를 확인해주세요.');
              }
            }}
          />
        </SignUpButtonWrapper>
      </Wrapper>
    </>
  );
};

export default SignUpPage;
