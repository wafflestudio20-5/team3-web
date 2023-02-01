import { useState, useEffect } from 'react';

import { loadItem } from '../utils/storage';
import { getMe } from '../store/slices/usersSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { postRefresh, sessionActions } from '../store/slices/sessionSlice';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const [isAuthed, setIsAuthed] = useState(false);
  const [sessionLoading, setSessionLoading] = useState(true);

  const { me } = useAppSelector(state => state.users);

  // DESC: 로그인 된 내 정보를 얻어오는 것이 목적
  const setMe = () => {
    dispatch(getMe(loadItem('accessToken')))
      .unwrap()
      .then(() => {
        setIsAuthed(true);
        setSessionLoading(false);
      })
      .catch(() => {
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
            setIsAuthed(false);
            setSessionLoading(false);
            dispatch(sessionActions.logout());
          });
      });
  };

  useEffect(() => {
    setMe();
  }, []);

  return { me, isAuthed, sessionLoading };
};
