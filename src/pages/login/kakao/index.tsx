import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import { postKakaoLogin } from '../../../store/slices/sessionSlice';
import { useAppDispatch } from '../../../store/hooks';
import { redirectWithMsg } from '../../../utils/errors';

const KaKaoLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const url = new URL(window.location.href);
  const code = url.searchParams.get('code');

  const loginKakao = async (code: string | null) => {
    dispatch(postKakaoLogin(code))
      .unwrap()
      .then(res => {
        toast.success(`${res.user?.username}님, 환영합니다!`);
        navigate('/');
      })
      .catch(err => {
        if (axios.isAxiosError(err)) {
          if (err.response?.data.email) {
            redirectWithMsg(2, '회원가입이 필요합니다.', () =>
              navigate('/signup', {
                state: {
                  isSocialLoginProp: true,
                  emailSocial: err.response?.data.email,
                },
              }),
            );
          } else {
            redirectWithMsg(1, '요청을 수행할 수 없습니다.', () =>
              navigate('/'),
            );
          }
        }
      });
  };

  useEffect(() => {
    const code = url.searchParams.get('code');
    loginKakao(code);
  }, []);
  return <div>로딩중입니다... 곧 로그인이 완료됩니다...</div>;
};

export default KaKaoLogin;
