import { useState, useEffect } from 'react';

import { loadItem } from '../utils/storage';
import { getMe } from '../store/slices/usersSlice';
import { normalToast } from '../utils/basic-toast-modal';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { postRefresh, sessionActions } from '../store/slices/sessionSlice';

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const [isAuthed, setIsAuthed] = useState(false);
  const [sessionLoading, setSessionLoading] = useState(true);

  const accessToken = loadItem('accessToken');
  const refreshToken = loadItem('refreshToken');
  const { me } = useAppSelector(state => state.users);

  // DESC: 로그인 된 내 정보를 얻어오는 것이 목적
  const setMe = () => {
    dispatch(getMe(loadItem('accessToken')))
      .unwrap()
      .then(() => {
        setIsAuthed(true);
        setSessionLoading(false);
      })
      .catch((err: { response: { data: { error: string } } }) => {
        if (err.response.data.error === '만료된 JWT 토큰입니다.') {
          dispatch(postRefresh(loadItem('refreshToken')))
            .unwrap()
            .then(() => {
              dispatch(getMe(loadItem('accessToken')))
                .unwrap()
                .then(() => {
                  setIsAuthed(true);
                  setSessionLoading(false);
                });
            })
            .catch(() => {
              dispatch(sessionActions.logout());
              normalToast('로그인이 필요합니다.');
            });
        }
      });
  };

  useEffect(() => {
    setMe();
  }, [accessToken, dispatch, refreshToken]);

  return { me, isAuthed, sessionLoading };
};
