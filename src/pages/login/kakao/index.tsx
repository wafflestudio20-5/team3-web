import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { requestKakaoLogin } from '../../../api/auth';
import axios from 'axios';

const KaKaoLogin = () => {
  const navigate = useNavigate();
  const url = new URL(window.location.href);
  const code = url.searchParams.get('code');
  console.log(code);

  useEffect(() => {
    axios
    .get(`http://3.35.168.70/kakao/login/?code=${code}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      throw err;
    });    
    // async () => {
    //   console.log('시작')
    //   const res: any = await requestKakaoLogin(code);
    //   console.log(res);
    //   if (res.message === 'Request failed with status code 404') {
    //     const email: string = res.response.data.email;
    //     navigate('/signup', {
    //       state: { isSocialLoginProp: true, emailSocial: email },
    //     });
    //   } else if (res.data.user) {
    //     console.log('haha');
    //     // setUser(res.data.user)
    //   } else {
    //     window.alert(res.message);
    //   }
    // };
  }, []);
  return <div>로딩중입니다... 곧 로그인이 완료됩니다...</div>;
};

export default KaKaoLogin;
