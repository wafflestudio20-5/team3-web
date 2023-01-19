import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home';
import ErrorPage from '../pages/error';
import LoginPage from '../pages/login';
import KaKaoLogin from '../pages/login/kakao';
import GoogleLoginPage from '../pages/login/google';
import ProfilePage from '../pages/profile';
import ProfileOtherPage from '../pages/profile-other';
import MarketPage from '../pages/market';
import SendReview from '../pages/sendReview';
import TradePostPage from '../pages/trade-post';
import ChatPage from '../pages/chat';
import { NeighborhoodLanding } from '../pages/neighborhoodLanding';
import SignUpPage from '../pages/signup';
import { NeighborhoodPostPage } from '../pages/neighborhoodPost';

// DESC: 라우팅 관리를 위한 EntryRoute
function EntryRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/kakao" element={<KaKaoLogin />} />
        <Route path="/login/google" element={<GoogleLoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile/me" element={<ProfilePage />} />
        <Route path="/profile/:id" element={<ProfileOtherPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/tradepost/:id" element={<TradePostPage />} />
        <Route path="/tradepost/:id/review" element={<SendReview />} />
        <Route path="/chat/messages/:UUID/:uid" element={<ChatPage />} />
        <Route path="/neighborhood" element={<NeighborhoodLanding />} />
        <Route path="/neighborhood/:id" element={<NeighborhoodPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default EntryRoute;
