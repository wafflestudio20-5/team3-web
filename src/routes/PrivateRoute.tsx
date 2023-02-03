import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import Spinner from '../components/spinner';
import { normalToast } from '../utils/basic-toast-modal';

interface PrivateRouteProps {
  children?: ReactElement;
  authentication: boolean;
}

export default function PrivateRoute({
  authentication,
}: PrivateRouteProps): React.ReactElement | null {
  const { isAuthed, sessionLoading } = useAuth();

  if (sessionLoading) {
    return <Spinner />;
  }

  if (authentication) {
    // DESC: 인증이 반드시 필요한 페이지
    if (!sessionLoading && !isAuthed) {
      normalToast('로그인이 필요합니다.');
    }
    return !sessionLoading && !isAuthed ? (
      <>
        <Navigate to="/" /> <Navigate to="/login" />
      </>
    ) : (
      <Outlet />
    );
  } else {
    // DESC: 인증이 반드시 필요 없는 페이지 (로그인, 회원가입)
    return !sessionLoading && isAuthed ? <Navigate to="/" /> : <Outlet />;
  }
}
