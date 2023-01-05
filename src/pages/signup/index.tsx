import { ChangeEvent, useState } from 'react';
import { COLOR_CARROT } from '../../constant';
import SignUpInputNormal, {
  SignUpButtonNormal,
} from './components/SignUpInputNormal';
import {
  H1,
  InformSpan,
  InformWrapper,
  SignUpButtonWrapper,
  Wrapper,
} from './signup.styled';

import { useDaumPostcodePopup } from 'react-daum-postcode';
import * as V from '../../utils/validateUserInfo';
import { useNavigate } from 'react-router-dom';
import {
  requestCheckEmail,
  requestCheckUsername,
  requestSignUpUser,
} from '../../api/auth';

const SignUpPage = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
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
  const navigate = useNavigate();

  const checkEmail = async () => {
    const res = (await requestCheckEmail(email)) as any;
    if (res.data) {
      alert('사용가능한 이메일입니다.');
      setIsEmailUnique(true);
    } else {
      alert('이미 동일한 이메일이 있습니다.');
    }
    // TODO: 에러처리
  };

  const checkUsername = async () => {
    const res = (await requestCheckUsername(username)) as any;
    if (res.data) {
      alert('사용가능한 닉네임입니다.');
      setIsUsernameUnique(true);
    } else {
      alert('이미 동일한 닉네임이 있습니다.');
    }
    // TODO: 에러처리
  };

  const signInUser = async () => {
    const res = await requestSignUpUser(email, password, username, location);
    // TODO: 응답 바탕으로 로그인 처리(이후 회원가입 플로우에 따라 달라짐)
  };

  const [location, setLocation] = useState('');
  // DESC: 카카오 API를 사용하여 위치 관련 정보를 얻어내기
  const open = useDaumPostcodePopup();
  const handleComplete = (data: any) => {
    // DESC: API 보니 jibunAddress 가 없는 경우 autoJibunAddress로 주소를 설정해놓아, 이에 맞춰 userAddress에 할당
    const userAddress =
      data.jibunAddress === '' ? data.autoJibunAddress : data.jibunAddress;
    setLocation(userAddress);
  };

  // DESC: 이 함수를 버튼에 붙여주면 됩니다
  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <>
      <Wrapper>
        <H1>회원가입</H1>
        <InformWrapper>
          <InformSpan>- * 는 필수 입력 항목임을 나타냅니다.</InformSpan>
          <InformSpan>
            - 이메일 인증 버튼 클릭 시 입력한 이메일로 인증 메일이 전송됩니다.
          </InformSpan>
        </InformWrapper>
        <SignUpInputNormal
          label="email"
          valueName="email"
          value={email}
          required={true}
          placeholder="이메일을 입력해주세요"
          validationText={V.valEmailToMsg(email)}
          handleChange={onChange}
          isWithButton={true}
          buttonText="이메일 인증"
          // TODO: 변경된 회원가입 플로우에 따라 이 버튼으로 중복체크 & 메일 인증 되도록 바꿔주기
          handleClick={checkEmail}
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
          handleClick={checkUsername}
        />

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

        <SignUpButtonWrapper>
          <SignUpButtonNormal
            text="회원가입"
            bgColor={COLOR_CARROT}
            disabled={
              !V.validAllInputs(email, password, passwordConfirm, username)
            }
            handleClick={() => {
              if (isEmailUnique && isUsernameUnique) {
                signInUser();
                navigate(`/signup/authEmail/${email}`);
              } else {
                alert('이메일과 닉네임 중복 여부를 확인해주세요.');
              }
            }}
          />
        </SignUpButtonWrapper>
        {/* DESC: /component 에 있는 Postcode 컴포넌트 사용 예시
        <Postcode
          text="동네"
          setLocation={setLocation}
          bgColor={COLOR_CARROT}
        /> */}
      </Wrapper>
    </>
  );
};

export default SignUpPage;
