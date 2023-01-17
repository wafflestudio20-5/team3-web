import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import { redirectWithMsg } from '../utils/errors';
import { getMe } from '../store/slices/usersSlice';
import { clearItem, loadItem } from '../utils/storage';
import { postRefresh } from '../store/slices/sessionSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [sessionLoading, setSessionLoading] = useState(true);

  const { me } = useAppSelector(state => state.users);
  const { accessToken } = useAppSelector(state => state.session);

  useEffect(() => {
    if (!accessToken) {
      const refreshToken = loadItem('refreshToken');
      if (refreshToken) {
        dispatch(postRefresh(refreshToken))
          .unwrap()
          .then(res => {
            dispatch(getMe(res.accessToken))
              .unwrap()
              .then(() => {
                setSessionLoading(false);
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(err => {
            if (axios.isAxiosError(err)) {
              if (err.response?.status === 403) {
                toast.error(err.response?.data.error);
                clearItem('refreshToken');
                navigate('/');
              } else if (err.response?.status === 401) {
                redirectWithMsg(2, err.response?.data.error, () =>
                  navigate('/login'),
                );
              } else if (err.response?.status === 404) {
                redirectWithMsg(2, err.response?.data.error, () =>
                  navigate('/'),
                );
              } else {
                redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
                  navigate('/'),
                );
              }
            }
          });
      } else {
        navigate('/login');
      }
    } else {
      dispatch(getMe(accessToken))
        .unwrap()
        .then(() => {
          setSessionLoading(false);
        })
        .catch(() => {
          const refreshToken = loadItem('refreshToken');
          if (refreshToken) {
            dispatch(postRefresh(refreshToken))
              .unwrap()
              .then(res => {
                dispatch(getMe(res.accessToken))
                  .unwrap()
                  .then(() => {
                    setSessionLoading(false);
                  })
                  .catch(err => {
                    console.log(err);
                  });
              })
              .catch(err => {
                if (axios.isAxiosError(err)) {
                  if (err.response?.status === 403) {
                    toast.error(err.response?.data.error);
                    clearItem('refreshToken');
                    navigate('/');
                  } else if (err.response?.status === 401) {
                    redirectWithMsg(2, err.response?.data.error, () =>
                      navigate('/login'),
                    );
                  } else if (err.response?.status === 404) {
                    redirectWithMsg(2, err.response?.data.error, () =>
                      navigate('/'),
                    );
                  } else {
                    redirectWithMsg(2, '요청을 수행할 수 없습니다.', () =>
                      navigate('/'),
                    );
                  }
                }
              });
          } else {
            navigate('/login');
          }
        });
    }
  }, []);

  return {
    me,
    accessToken,
    sessionLoading,
  };
};
