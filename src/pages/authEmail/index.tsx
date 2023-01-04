import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Gnb from '../../components/gnb';
import { COLOR_CARROT } from '../../constant';
import {
  Button,
  SendAgainButton,
  SendAgainSpan,
  SendAgainWrapper,
  Span,
  Wrapper,
} from './authEmail.styled';

// interface AuthEmailProps {
//   email?: string;
// }

export const AuthEmail = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const checkEmailVerified = (email?: string) => {
    axios
      .get(
        process.env.NODE_ENV === 'development'
          ? '/auth/checkEmailVerified'
          : 'http://3.35.168.70/auth/checkEmailVerified',
        { params: { email: email } },
      )
      .then(res => {
        console.log(res);
        if (res.data) {
          alert('회원가입이 완료되었습니다! 로그인해주세요.');
          navigate('/login');
        } else {
          alert('이메일 인증에 실패하였습니다. 다시 인증해주세요.');
        }
      })
      .catch(err => console.log(err));
  };

  const sendVerificationEmail = (email?: string) => {
    axios
      .get(
        process.env.NODE_ENV === 'development'
          ? '/auth/sendVerificationEmail'
          : 'http://3.35.168.70/auth/sendVerificationEmail',
        { params: { email: email } },
      )
      .then(res => {
        console.log(res);
        alert(`${email}로 인증 메일이 전송되었습니다.`);
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <Gnb />
      <Wrapper>
        <Span>
          입력하신 이메일 <Span color={COLOR_CARROT}>{email}</Span> (으)로
          <br /> 인증 메일을 보내드렸어요.
        </Span>
        <Span>
          메일에 첨부된 링크를 눌러 인증을 완료하고, <br />
          아래의 인증 완료 버튼을 눌러주세요.
        </Span>
        <SendAgainWrapper>
          <SendAgainSpan>인증 메일을 받지 못하셨나요?</SendAgainSpan>
          <SendAgainButton
            onClick={() => {
              sendVerificationEmail(email);
            }}
          >
            인증 메일 다시 보내기
          </SendAgainButton>
        </SendAgainWrapper>
        <Button
          onClick={() => {
            checkEmailVerified(email);
          }}
        >
          인증 완료
        </Button>
      </Wrapper>
    </>
  );
};
