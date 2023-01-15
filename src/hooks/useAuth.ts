import { useState, useEffect } from 'react';
import axios from 'axios';

import { getMe } from '../store/slices/usersSlice';
import { postLogin } from '../store/slices/sessionSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { me } = useAppSelector(state => state.users);
  const { accessToken } = useAppSelector(state => state.session);
  const [sessionLoading, setSessionLoading] = useState(true);
  // const [errorStatus, setErrorStatus] = useState(0);

  useEffect(() => {
    if (!accessToken) {
      // TODO: 후에 postLogin -> getRefresh()로 바꿔주기
      dispatch(postLogin({ email: '456@naver.com', password: 'rlawhkgns123!' }))
        .unwrap()
        .then(res => {
          // TODO: 얻어오는 정보 확인해서 토큰 뽑아주기
          dispatch(getMe(res.accessToken))
            .unwrap()
            .then(() => {
              setSessionLoading(false);
            })
            .catch(err => {
              console.log(err);
              // TODO: 케이스 따라 적절한 에러코드 setting
            });
        })
        .catch(err => {
          if (axios.isAxiosError(err)) {
            // TODO: 케이스 따라 적절한 에러코드 setting
            navigate('/login');
          }
        });
    } else {
      dispatch(getMe(accessToken))
        .unwrap()
        .then(() => {
          setSessionLoading(false);
        })
        .catch(() => {
          // TODO: 후에 postLogin -> getRefresh()로 바꿔주기
          dispatch(
            postLogin({ email: '123@naver.com', password: 'rlawhkgns123!' }),
          )
            .unwrap()
            .then(res => {
              // TODO: 얻어오는 정보 확인해서 토큰 뽑아주기
              dispatch(getMe(res.accessToken))
                .unwrap()
                .then(() => {
                  setSessionLoading(false);
                })
                .catch(err => {
                  console.log(err);
                  // TODO: 케이스 따라 적절한 에러코드 setting
                });
            })
            .catch(err => {
              if (axios.isAxiosError(err)) {
                // TODO: 케이스 따라 적절한 에러코드 setting
              }
            });
        });
    }
  }, []);

  return {
    me,
    accessToken,
    // errorStatus,
    sessionLoading,
  };
};
