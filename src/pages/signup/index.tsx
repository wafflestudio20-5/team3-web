import { ChangeEvent, useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import { useAppDispatch } from '../../store/hooks';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postLogin } from '../../store/slices/sessionSlice';
import { randomPassword } from '../../utils/randomPassword';
import SignUpInputNormal from './components/SignUpInputNormal';

import {
  requestSendEmail,
  requestCheckEmail,
  requestSignUpUser,
  requestVerifyEmail,
  requestCheckUsername,
} from '../../api/auth';
import * as V from '../../utils/validateUserInfo';
import { Coordinate } from '../../types/auth';
import { getCoordinate } from '../../utils/map';
import { redirectWithMsg } from '../../utils/errors';

import * as S from './signup.styled';
import logo from '../../assets/logo.svg';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [location, setLocation] = useState('');
  const [coordinate, setCoordinate] = useState<Coordinate>({
    lat: 0,
    lng: 0,
  });
  getCoordinate(location, coordinate, setCoordinate);

  let isSocialLoginProp: boolean, emailSocial: string;
  if (useLocation().state === null) {
    // 일반 로그인의 경우
    isSocialLoginProp = false;
    emailSocial = '';
  } else {
    // 소셜 로그인의 경우
    /* 소셜로그인으로부터 링크를 타고 넘어온 prop (소셜 여부, 이메일) */
    isSocialLoginProp = useLocation().state.isSocialLoginProp;
    emailSocial = useLocation().state.emailSocial;
  }

  const [isEmailAuthed, setIsEmailAuthed] = useState(false);
  const [isEmailUnique, setIsEmailUnique] = useState(false);
  const [isUsernameUnique, setIsUsernameUnique] = useState(false);
  const [isSocialLogin, setIsSocialLogin] = useState(isSocialLoginProp);
  // DESC: 이메일 인증 기능을 회원가입 페이지에서 구현
  const [isEmailAuthButtonOpen, setIsEmailAuthButtonOpen] = useState(false);

  const [inputs, setInputs] = useState({
    email: '',
    emailVerification: '',
    password: '',
    passwordConfirm: '',
    username: '',
  });
  const { email, emailVerification, password, passwordConfirm, username } =
    inputs;
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // DESC: 랜덤 닉네임 설정
  // axios
  //   .get('https://nickname.hwanmoo.kr/?format=text&count=1&max_length=10&')
  //   .then(res => console.log(res));

  useEffect(() => {
    if (isSocialLogin) {
      setIsEmailAuthed(true);
      const passwordSocial: string = randomPassword();
      setInputs({
        ...inputs,
        email: emailSocial,

        password: passwordSocial,
        passwordConfirm: passwordSocial,
      });
      setIsEmailUnique(true);
    }
  }, [isSocialLogin]);

  const checkEmail = async () => {
    clearInterval(timerId.current);

    if (V.valEmail(email)) {
      const res = (await requestCheckEmail(email)) as any;
      // 사용가능한(중복되지 않는) 이메일인 경우
      if (res.data) {
        setIsEmailUnique(true);
        setIsEmailAuthButtonOpen(true);
        requestSendEmail(email); // 인증 이메일 전송
        toast(`${email}로 인증 메일을 전송하였습니다.`);

        // DESC: 타이머 초기화
        setMin(10);
        setSec(0);
        time.current = 600;
        startTimer();
      } else {
        // console.log(res);
        toast('이미 동일한 이메일이 있습니다.');
      }
    } else {
      toast('올바르지 않은 형식의 이메일입니다.');
    }
  };

  const verifyEmail = async () => {
    const res = (await requestVerifyEmail(email, emailVerification)) as any;
    // 사용가능한(중복되지 않는) 이메일인 경우
    if (res.data) {
      toast('이메일 인증이 완료되었습니다.');
      setIsEmailAuthed(true);
    } else {
      toast('이메일 인증에 실패하였습니다. 다시 인증해주세요.');
    }
  };

  const checkUsername = async () => {
    const res = (await requestCheckUsername(username)) as any;
    if (res.data) {
      toast('사용가능한 닉네임입니다.');
      setIsUsernameUnique(true);
    } else {
      toast('이미 동일한 닉네임이 있습니다.');
    }
  };

  const signUpUser = async () => {
    const res = (await requestSignUpUser({
      email,
      password,
      username,
      isEmailAuthed,
      location,
      coordinate,
    })) as any;
    if (res.status === 200) {
      dispatch(postLogin({ email, password }))
        .unwrap()
        .then(res => {
          toast.success(`${res.user?.username}님, 환영합니다!`);
          navigate('/');
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            if (err.response?.status === 403) {
              // 이메일, 비밀번호 잘못됨
              toast.error(err.response?.data.error);
            } else if (err.response?.status === 400) {
              // error: 이메일 인증이 필요합니다. 적절한 처리
            } else {
              redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
                navigate('/'),
              );
            }
          }
        });
      alert('회원가입에 성공하였습니다'); // 로그인 페이지로 넘어가기 전에 사용자에게 알려주기
      navigate('/login');
    } else {
      toast('회원가입에 실패하였습니다.');
    }
  };

  // DESC: 카카오 API를 사용하여 위치 관련 정보를 얻어내기
  const open = useDaumPostcodePopup();
  const handleComplete = (data: any) => {
    // DESC: API 보니 jibunAddress 가 없는 경우 autoJibunAddress로 주소를 설정해놓아, 이에 맞춰 userAddress에 할당
    const userAddress =
      data.jibunAddress === '' ? data.autoJibunAddress : data.jibunAddress;
    setLocation(userAddress);
  };
  // DESC: 이 함수를 버튼에 붙여주면 됩니다
  const handleClick = useCallback(() => {
    open({ onComplete: handleComplete });
  }, [open, handleComplete]);

  // DESC: Timer
  const [min, setMin] = useState(10);
  const [sec, setSec] = useState(0);
  const time = useRef(600);
  const timerId = useRef<any>(null);

  const startTimer = useCallback(() => {
    timerId.current = setInterval(() => {
      setMin(Math.floor(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);

    if (time.current === 0) {
      clearInterval(timerId.current);
    }
  }, []);

  useEffect(() => {
    return () => clearInterval(timerId.current);
  }, []);

  return (
    <S.OuterWrapper>
      <S.Logo src={logo} alt="logo" />
      <S.Subtitle>
        하나의 아이디로 와플마켓의 다양한 서비스를 이용해보세요.
      </S.Subtitle>
      <S.Wrapper>
        <SignUpInputNormal
          label="email"
          valueName="email"
          value={email}
          color={isSocialLogin ? 'rgba(0,0,0,0.3)' : 'black'}
          required={true}
          placeholder="이메일"
          validationText={V.valEmailToMsg(email)}
          handleChange={e => {
            onChange(e);
            setIsEmailAuthButtonOpen(false);
            setIsEmailUnique(false);
          }}
          isWithButton={!isSocialLogin}
          isReadOnly={isSocialLogin}
          buttonText="이메일 인증"
          // TODO: 변경된 회원가입 플로우에 따라 이 버튼으로 중복체크 & 메일 인증 되도록 바꿔주기
          handleClick={checkEmail}
        />
        {isEmailAuthButtonOpen && (
          <S.EmailAuthWrapper>
            <S.P>{email} 로 인증 메일을 전송하였습니다.</S.P>
            <S.EmailInnerWrapper>
              <S.InputPositionWrapper>
                <S.EmailVerifyInput
                  name="emailVerification"
                  value={emailVerification}
                  color={isSocialLogin ? 'rgba(0,0,0,0.3)' : 'black'}
                  required={true}
                  placeholder="인증코드 입력"
                  onChange={e => {
                    onChange(e);
                  }}
                  // TODO: 변경된 회원가입 플로우에 따라 이 버튼으로 중복체크 & 메일 인증 되도록 바꿔주기
                />
                {min <= 0 && sec <= 0 ? (
                  <S.Timer isTimesUp>00:00</S.Timer>
                ) : (
                  <S.Timer>{`${String(min).padStart(2, '0')}:${String(
                    sec,
                  ).padStart(2, '0')}`}</S.Timer>
                )}
              </S.InputPositionWrapper>

              <S.ButtonWrapper>
                <S.EmailVerifyButton
                  isVerifyButton
                  onClick={verifyEmail}
                  isEmailAuthed={isEmailAuthed}
                  disabled={isEmailAuthed}
                >
                  {isEmailAuthed ? '인증 완료' : '인증 확인'}
                </S.EmailVerifyButton>
                <S.EmailVerifyButton onClick={checkEmail}>
                  이메일 재요청
                </S.EmailVerifyButton>
              </S.ButtonWrapper>
            </S.EmailInnerWrapper>
          </S.EmailAuthWrapper>
        )}
        <SignUpInputNormal
          label="password"
          valueName="password"
          value={password}
          color={isSocialLogin ? 'rgba(0,0,0,0.3)' : 'black'}
          type="password"
          required={true}
          placeholder="비밀번호"
          validationText={V.valPasswordToMsg(password)}
          handleChange={onChange}
          isReadOnly={isSocialLogin}
        />
        <SignUpInputNormal
          label="password confirmation"
          valueName="passwordConfirm"
          value={passwordConfirm}
          color={isSocialLogin ? 'rgba(0,0,0,0.3)' : 'black'}
          type="password"
          required={true}
          placeholder="비밀번호를 한 번 더 입력하세요"
          validationText={V.confirmPasswordToMsg(password, passwordConfirm)}
          handleChange={onChange}
          isReadOnly={isSocialLogin}
        />
        <SignUpInputNormal
          label="username"
          valueName="username"
          value={username}
          required={true}
          placeholder="유저 이름"
          validationText={V.valUsernameToMsg(username)}
          handleChange={e => {
            onChange(e);
            setIsUsernameUnique(false);
          }}
          isWithButton={true}
          buttonText="중복 확인"
          handleClick={checkUsername}
        />

        <SignUpInputNormal
          label="location"
          valueName="location"
          value={location}
          placeholder="동네 이름을 검색하세요"
          isReadOnly={true}
          isWithButton={true}
          buttonText="동네 검색"
          handleClick={handleClick}
        />

        <S.SignUpButtonWrapper>
          <S.SubmitButton
            disabled={
              !V.validAllInputs(email, password, passwordConfirm, username)
            }
            onClick={() => {
              if (isEmailUnique && isUsernameUnique) {
                signUpUser();
              } else if (isSocialLogin) {
                signUpUser();
              } else {
                alert('이메일과 닉네임 중복 여부를 확인해주세요.');
              }
            }}
          >
            회원가입
          </S.SubmitButton>
        </S.SignUpButtonWrapper>
      </S.Wrapper>
    </S.OuterWrapper>
  );
};

export default SignUpPage;
