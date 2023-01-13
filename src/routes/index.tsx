import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home';
import ErrorPage from '../pages/error';
import LoginPage from '../pages/login';
import KaKaoLogin from '../pages/login/kakao';
import ProfilePage from '../pages/profile';
import MarketPage from '../pages/market';
import SendReview from '../pages/sendReview';

// DESC: 라우팅 관리를 위한 EntryRoute
function EntryRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/kakao" element={<KaKaoLogin />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/review" element={<SendReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default EntryRoute;
