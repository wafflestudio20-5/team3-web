import { ChangeEvent, useState } from 'react';
import SignUpInputNormal, {
  SignUpButtonNormal,
} from './components/SignUpInputNormal';
import { H1, SignUpButtonWrapper, Span, Wrapper } from './signup.styled';

const SignUpPage = () => {
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
    email: '',
    location: '',
    img: '',
  });
  const { id, password, passwordConfirm, email, location, img } = inputs;
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <Wrapper>
      <H1>회원가입</H1>
      <SignUpInputNormal
        label="username"
        valueName="id"
        value={id}
        required={true}
        placeholder="아이디를 입력해주세요"
        handleChange={onChange}
        isWithButton={true}
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
        label="email"
        valueName="email"
        value={email}
        required={true}
        placeholder="이메일을 입력해주세요"
        handleChange={onChange}
      />
      <SignUpInputNormal
        label="profile image"
        valueName="img"
        value={img}
        placeholder="(선택) 프로필 사진의 주소를 입력해주세요"
        handleChange={onChange}
      />
      {/* <SignUpInputNormal // location의 경우 이후 select를 이용하도록 수정
        valueName="location"
        value={location}
        required={false}
        placeholder="사는 지역을 선택해주세요"
        handleChange={onChange}
      /> */}
      <SignUpButtonWrapper>
        <SignUpButtonNormal
          text="회원가입"
          bgColor="#FF6F0F"
          handleClick={() => {
            console.log('회원가입!'); // 이후 서버에 요청하도록 수정
          }}
        />
      </SignUpButtonWrapper>
    </Wrapper>
  );
};

export default SignUpPage;
