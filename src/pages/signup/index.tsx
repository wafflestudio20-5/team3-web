import { ChangeEvent, useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import SignUpInputNormal, {
  SignUpButtonNormal,
} from './components/SignUpInputNormal';

import {
  requestSendEmail,
  requestCheckEmail,
  requestCheckUsername,
  requestSignUpUser,
  requestVerifyEmail,
} from '../../api/auth';
import * as V from '../../utils/validateUserInfo';

import { Coordinate } from '../../types/auth';
import { getCoordinate } from '../../utils/map';

import * as S from './signup.styled';
import { COLOR_CARROT } from '../../constant';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { randomPassword } from '../../utils/randomPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch } from '../../store/hooks';
import { postLogin } from '../../store/slices/sessionSlice';
import axios from 'axios';
import { redirectWithMsg } from '../../utils/errors';

const SignUpPage = () => {
  const [location, setLocation] = useState('');
  const [coordinate, setCoordinate] = useState<Coordinate>({
    lat: 0,
    lng: 0,
  });

  // useEffect안에 넣지 말고 사용 (내부에 location에 따른 useEffect 걸려있음)
  getCoordinate(location, coordinate, setCoordinate);
  // TODO: test용 콘솔 -> 기능 한 번 확인해보시고 지워주시면 감사하겠습니다!
  // console.log(location, coordinate);

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

  const [isSocialLogin, setIsSocialLogin] = useState(isSocialLoginProp);

  const [isEmailAuthed, setIsEmailAuthed] = useState(false);
  const [isEmailUnique, setIsEmailUnique] = useState(false);
  const [isUsernameUnique, setIsUsernameUnique] = useState(false);
  // DESC: 이메일 인증 기능을 회원가입 페이지에서 구현
  const [isEmailAuthButtonOpen, setIsEmailAuthButtonOpen] = useState(false);

  const navigate = useNavigate();
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

  const dispatch = useAppDispatch();

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
    if (V.valEmail(email)) {
      const res = (await requestCheckEmail(email)) as any;
      // 사용가능한(중복되지 않는) 이메일인 경우
      if (res.data) {
        setIsEmailUnique(true);
        setIsEmailAuthButtonOpen(true);
        requestSendEmail(email); // 인증 이메일 전송
        toast(`${email}로 인증 메일을 전송하였습니다.`);
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

  return (
    <>
      <S.Wrapper>
        <S.H1>회원가입</S.H1>
        <SignUpInputNormal
          label="email"
          valueName="email"
          value={email}
          color={isSocialLogin ? 'rgba(0,0,0,0.3)' : 'black'}
          required={true}
          placeholder="이메일을 입력해주세요"
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
          <>
            <S.EmailAuthWrapper>
              <S.P>{email} 로 인증 메일을 전송하였습니다.</S.P>
              <S.P onClick={checkEmail}>메일 다시 보내기</S.P>
            </S.EmailAuthWrapper>
            <SignUpInputNormal
              label="email verification"
              valueName="emailVerification"
              value={emailVerification}
              color={isSocialLogin ? 'rgba(0,0,0,0.3)' : 'black'}
              required={true}
              placeholder="이메일로 전송된 인증코드를 입력해주세요"
              handleChange={e => {
                onChange(e);
              }}
              isWithButton={true}
              buttonText="인증 확인"
              // TODO: 변경된 회원가입 플로우에 따라 이 버튼으로 중복체크 & 메일 인증 되도록 바꿔주기
              handleClick={verifyEmail}
            />
          </>
        )}
        <SignUpInputNormal
          label="password"
          valueName="password"
          value={password}
          color={isSocialLogin ? 'rgba(0,0,0,0.3)' : 'black'}
          type="password"
          required={true}
          placeholder="비밀번호를 입력해주세요"
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
          placeholder="비밀번호를 한 번 더 입력해주세요"
          validationText={V.confirmPasswordToMsg(password, passwordConfirm)}
          handleChange={onChange}
          isReadOnly={isSocialLogin}
        />
        <SignUpInputNormal
          label="username"
          valueName="username"
          value={username}
          required={true}
          placeholder="사용하고자 하는 유저 이름을 입력해주세요"
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
          placeholder="동네 이름을 검색해주세요"
          isReadOnly={true}
          isWithButton={true}
          buttonText="동네 검색"
          handleClick={handleClick}
        />

        <S.SignUpButtonWrapper>
          <SignUpButtonNormal
            text="회원가입"
            bgColor={COLOR_CARROT}
            disabled={
              !V.validAllInputs(email, password, passwordConfirm, username)
            }
            handleClick={() => {
              if (isEmailUnique && isUsernameUnique) {
                signUpUser();
              } else if (isSocialLogin) {
                signUpUser();
              } else {
                alert('이메일과 닉네임 중복 여부를 확인해주세요.');
              }
            }}
          />
        </S.SignUpButtonWrapper>
      </S.Wrapper>
    </>
  );
};

export default SignUpPage;
