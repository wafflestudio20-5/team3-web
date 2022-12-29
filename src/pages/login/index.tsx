import { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { Wrapper, Container, H1, Input, H3 } from './login.styled';
import LoginButton from './components/login-button/index';
import kakao from '../../assets/kakao.svg';
import waffle from '../../assets/waffle.svg';
import github from '../../assets/github.svg';
import profile from '../../assets/profile.svg';

const LoginPage: React.FC = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 카카오 로그인하기
  const REST_API_KEY = '48fa2a845a3ad671636c876bd0c1fcfe';
  const REDIRECT_URI = 'http://localhost:3000/login/kakao';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const linkToKakao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  // 백엔드와의 통신을 위한 테스트 api call
  const test = () => {
    axios.get('http://3.35.168.70/hello').then(res => {
      console.log(res);
    });
  };

  return (
    <>
      <Wrapper>
        <Container>
          <H1>와플마켓에 로그인하세요</H1>
          <Input
            value={email}
            required={true}
            placeholder="이메일"
            onChange={onChange}
          />
          <Input
            type="password"
            value={password}
            placeholder="비밀번호"
            onChange={onChange}
          />
          <LoginButton img={waffle} text="로그인" bgColor="#FF9E66" />
          <H3>아직 회원이 아니세요?</H3>
          <LoginButton img={profile} text="회원가입" bgColor="#DCDEE3" />
          <LoginButton
            img={kakao}
            text="카카오로 시작"
            bgColor="#FEE500"
            handleClick={linkToKakao}
          />
          <LoginButton
            img={github}
            text="GitHub로 시작"
            color="#f8f9fa"
            bgColor="#495057"
            handleClick={test}
          />
        </Container>
      </Wrapper>
    </>
  );
};

export default LoginPage;
