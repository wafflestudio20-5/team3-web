import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

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
import MyReviewPage from '../pages/my-review';
import OthersReviewPage from '../pages/others-review';
import SellHistoryMyPage from '../pages/sell-history-my';
import SellHistoryOthersPage from '../pages/sell-history-others';
import BuyHistoryPage from '../pages/buy-history';
import LikeHistoryPage from '../pages/like-history';
import { NeighborHistoryPage } from '../pages/neighbor-history';
import { NeighborHistoryLikePage } from '../pages/neighbor-like-history';

// DESC: 라우팅 관리를 위한 EntryRoute
function EntryRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route element={<PrivateRoute authentication={false} />}>
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
        <Route element={<PrivateRoute authentication={false} />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/login/kakao" element={<KaKaoLogin />} />
        <Route path="/login/google" element={<GoogleLoginPage />} />
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/profile/me" element={<ProfilePage />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/profile/me/review" element={<MyReviewPage />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/profile/:id" element={<ProfileOtherPage />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/profile/:id/review" element={<OthersReviewPage />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/profile/me/sell" element={<SellHistoryMyPage />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/profile/:id/sell" element={<SellHistoryOthersPage />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/profile/me/buy" element={<BuyHistoryPage />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/profile/me/like" element={<LikeHistoryPage />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route
            path="/profile/me/neighborhood"
            element={<NeighborHistoryPage />}
          />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route
            path="/profile/me/neighborhoodlike"
            element={<NeighborHistoryLikePage />}
          />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/market" element={<MarketPage />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/tradepost/:id" element={<TradePostPage />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/tradepost/:id/review" element={<SendReview />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/chat/messages/:UUID/:uid/:pid" element={<ChatPage />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/neighborhood" element={<NeighborhoodLanding />} />
        </Route>
        <Route element={<PrivateRoute authentication={true} />}>
          <Route path="/neighborhood/:id" element={<NeighborhoodPostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default EntryRoute;
