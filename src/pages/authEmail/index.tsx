import { COLOR_CARROT } from '../../constant';
import {
  Button,
  SendAgainButton,
  SendAgainSpan,
  SendAgainWrapper,
  Span,
  Wrapper,
} from './authEmail.styled';

interface AuthEmailProps {
  email?: string;
}

export const AuthEmail = ({ email }: AuthEmailProps) => {
  return (
    <Wrapper>
      <Span>
        입력하신 이메일{' '}
        <Span color={COLOR_CARROT}>{email || 'waffle@naver.com'}</Span> (으)로
        <br /> 인증 메일을 보내드렸어요.
      </Span>
      <Span>
        메일에 첨부된 링크를 눌러 인증을 완료하고, <br />
        아래의 인증 완료 버튼을 눌러주세요.
      </Span>
      <SendAgainWrapper>
        <SendAgainSpan>인증 메일을 받지 못하셨나요?</SendAgainSpan>
        <SendAgainButton>인증 메일 다시 보내기</SendAgainButton>
      </SendAgainWrapper>
      <Button>인증 완료</Button>
    </Wrapper>
  );
};
